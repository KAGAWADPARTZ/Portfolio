# NPM Dependency Analysis & Upgrade Plan

This document details the deprecated, obsolete, and outdated npm libraries in [package.json](file:///c:/Users/PARTZ/Portfolio/package.json) and provides an actionable guide to resolving them.

## ⚠️ Critical & Deprecated Issues

### 1. `react-tsparticles` (v1.42.2)
> [!WARNING]
> **Deprecated:** `react-tsparticles` is officially deprecated. The maintainer has moved development to modular packages.

*   **Replacement:** `@tsparticles/react` and `@tsparticles/engine`.
*   **Impact:** Code references in [Particle.js](file:///c:/Users/PARTZ/Portfolio/src/components/Particle.js) must be updated to use the new react component and engine initialization.

### 2. `react-scripts` (v0.0.0)
> [!IMPORTANT]
> **Broken Installation & Obsolete Framework:**
> 1. Your `package.json` currently locks `"react-scripts"` to `^0.0.0` which points to a dummy empty package on NPM with no executables. This breaks commands like `npm run start` and `npm run build`.
> 2. Create React App (CRA) is deprecated and no longer maintained by the React core team.

*   **Recommended Action:** Migrate from Create React App to **Vite** for modern bundler support, speed, and standard maintenance.
*   **Quick-Fix Action:** If you must keep Create React App, update `"react-scripts"` to `^5.0.1`.

---

## 📈 Outdated Packages & Upgrade Path

The following packages are currently outdated. Updating them will patch security vulnerabilities, fix bugs, and enable compatibility with newer APIs.

| Package Name | Current Version | Latest Version | Upgrade Recommendation | Notes / Impact |
| :--- | :--- | :--- | :--- | :--- |
| `react` | `^17.0.2` | `19.2.6` | `^18.2.0` (or `^19.0.0`) | Needed for newer third-party library versions. |
| `react-dom` | `^17.0.2` | `19.2.6` | `^18.2.0` (or `^19.0.0`) | Must match the `react` version. |
| `bootstrap` | `^5.1.3` | `5.3.8` | `^5.3.8` | Brings modern grid features and CSS variable customizations. |
| `react-bootstrap` | `^2.2.1` | `2.10.10` | `^2.10.10` | Needed for Bootstrap 5.3 compatibility. |
| `@testing-library/jest-dom` | `^5.16.2` | `6.9.1` | `^6.9.1` | Removes deprecated transitive dependency `source-map-resolve`. |
| `@testing-library/react` | `^12.1.4` | `16.3.2` | Match React version | Align with React version upgrades (v18+). |
| `@testing-library/user-event` | `^13.5.0` | `14.6.1` | `^14.6.1` | Modern user event simulation. |
| `web-vitals` | `^2.1.4` | `5.2.0` | `^5.2.0` | Performance reporting. |

---

## ✅ Up-to-Date Packages

These packages do not require any action:
*   `axios` (v1.16.1)
*   `react-pdf` (v10.4.1)
*   `react-github-calendar` (v5.0.6)
*   `react-parallax-tilt` (v1.7.42)
