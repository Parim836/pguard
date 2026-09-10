import assert from "node:assert/strict";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

// Render the actual pages in both languages, including shared navigation and
// phone previews. Browser effects (animations and DOM events) do not run here.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const originalStorage = Object.getOwnPropertyDescriptor(
  globalThis,
  "localStorage",
);
try {
  const { LanguageProvider } = await server.ssrLoadModule(
    "/src/LanguageContext.tsx",
  );
  const { default: Navbar } = await server.ssrLoadModule(
    "/src/components/Navbar.tsx",
  );
  const { default: Footer } = await server.ssrLoadModule(
    "/src/components/Footer.tsx",
  );
  const cases = {
    Home: [
      "เรียกเจ้าหน้าที่รักษาความปลอดภัยมืออาชีพ",
      "Book professional security guards",
    ],
    Features: ["ฟีเจอร์ของ PGUARD", "PGUARD Features"],
    Business: ["สำหรับธุรกิจ / หน่วยงาน", "For businesses and organizations"],
    Guard: ["สำหรับเจ้าหน้าที่ รปภ.", "For security guards"],
    Documents: [
      "เอกสารสำหรับสมัครเป็น รปภ.",
      "Documents for security guard registration",
    ],
    Contact: ["เราพร้อมดูแลคุณ", "We&#x27;re here to help"],
  };
  for (const [name, headings] of Object.entries(cases)) {
    const { default: Page } = await server.ssrLoadModule(
      `/src/pages/${name}.tsx`,
    );
    for (const [index, language] of ["TH", "EN"].entries()) {
      Object.defineProperty(globalThis, "localStorage", {
        configurable: true,
        value: { getItem: () => language },
      });
      const markup = renderToStaticMarkup(
        createElement(
          MemoryRouter,
          null,
          createElement(
            LanguageProvider,
            null,
            createElement(Navbar),
            createElement(Page),
            createElement(Footer),
          ),
        ),
      );
      assert.ok(
        markup.includes(headings[index]),
        `${name}: missing ${language} heading`,
      );
      if (language === "EN") {
        assert.doesNotMatch(
          markup,
          /[\u0e01-\u0e3a\u0e40-\u0e5b]/,
          `${name}: untranslated Thai text`,
        );
      }
    }
    console.log(`${name}: Thai and English rendering passed`);
  }
  const { default: Features } = await server.ssrLoadModule(
    "/src/pages/Features.tsx",
  );
  for (const value of [null, "unsupported", "blocked"]) {
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: {
        getItem() {
          if (value === "blocked") throw new Error("Storage blocked");
          return value;
        },
      },
    });
    const markup = renderToStaticMarkup(
      createElement(LanguageProvider, null, createElement(Features)),
    );
    assert.ok(
      markup.includes("ฟีเจอร์ของ PGUARD"),
      "Storage fallback should be Thai",
    );
  }
  console.log("Missing, invalid, and blocked storage: Thai fallback passed");
} finally {
  if (originalStorage)
    Object.defineProperty(globalThis, "localStorage", originalStorage);
  else delete globalThis.localStorage;
  await server.close();
}
