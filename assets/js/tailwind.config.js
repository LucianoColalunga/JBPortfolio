// Design tokens for the site, consumed by the Tailwind CDN build.
// Kept isolated from markup so the palette/type scale can change without touching index.html.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-surface-variant": "#43474d",
        "background": "#f8f9ff",
        "surface-tint": "#49607c",
        "on-tertiary-fixed-variant": "#6e3900",
        "tertiary-fixed": "#ffdcc3",
        "outline-variant": "#c3c6ce",
        "surface-variant": "#d5e3fc",
        "on-tertiary-container": "#d77503",
        "primary-container": "#0f2942",
        "on-error-container": "#93000a",
        "on-secondary-fixed-variant": "#00504a",
        "inverse-surface": "#233144",
        "outline": "#74777e",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#ffb77d",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#e6eeff",
        "on-secondary-fixed": "#00201d",
        "inverse-primary": "#b0c9e8",
        "on-secondary-container": "#006f67",
        "on-surface": "#0d1c2e",
        "primary": "#001428",
        "inverse-on-surface": "#eaf1ff",
        "on-tertiary": "#ffffff",
        "secondary-container": "#99efe5",
        "on-primary-fixed-variant": "#314863",
        "tertiary": "#220e00",
        "on-background": "#0d1c2e",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#b0c9e8",
        "secondary": "#006a63",
        "on-tertiary-fixed": "#2f1500",
        "surface": "#f8f9ff",
        "on-primary-container": "#7991af",
        "error": "#ba1a1a",
        "on-primary-fixed": "#011d35",
        "secondary-fixed": "#9cf2e8",
        "primary-fixed": "#d1e4ff",
        "tertiary-container": "#401f00",
        "surface-container-low": "#eff4ff",
        "secondary-fixed-dim": "#80d5cb",
        "surface-bright": "#f8f9ff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d5e3fc",
        "surface-dim": "#ccdbf3"
      },
      borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
      spacing: {
        "margin-mobile": "1.25rem", "space-sm": "0.5rem", "space-md": "1rem",
        "margin": "3rem", "gutter": "1.5rem", "space-lg": "1.5rem",
        "gutter-mobile": "1rem", "space-xl": "2.5rem", "space-xs": "0.25rem"
      },
      fontFamily: {
        "body-lg": ["Inter"], "headline-sm": ["Inter"], "headline-lg": ["Inter"],
        "body-md": ["Inter"], "label-md": ["JetBrains Mono"], "headline-md": ["Inter"],
        "body-sm": ["Inter"], "headline-xl-mobile": ["Inter"], "headline-xl": ["Inter"],
        "title-md": ["Inter"], "label-sm": ["JetBrains Mono"], "headline-lg-mobile": ["Inter"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-sm": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
        "headline-lg": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["15px", { "lineHeight": "24px", "fontWeight": "400" }],
        "label-md": ["13px", { "lineHeight": "18px", "letterSpacing": "0.04em", "fontWeight": "500" }],
        "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
        "body-sm": ["13px", { "lineHeight": "20px", "fontWeight": "400" }],
        "headline-xl-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.025em", "fontWeight": "800" }],
        "title-md": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
        "label-sm": ["11px", { "lineHeight": "16px", "letterSpacing": "0.06em", "fontWeight": "500" }],
        "headline-lg-mobile": ["26px", { "lineHeight": "34px", "letterSpacing": "-0.015em", "fontWeight": "700" }]
      }
    }
  }
};
