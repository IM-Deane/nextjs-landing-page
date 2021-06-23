# Project: Next.js Landing Page

_Current Version:_ 1.0.0

# Note: The core functionality of the site has been completed. Future updates will focus on extending the template and handling any errors.

# Description:

The primary goal of this project is to learn about the Next.js framework. By
creating this landing page, I hope to solidify my understanding of Next.js and
have a working template that can be reused in my future projects.

# Features/Sections:

Some of the libraries used include:

- [theme.ui](https://theme-ui.com/): a library used for creating custom user
  interfaces

_Overview:_

The website will be a single paged Next.js application. The fixed navbar at the
top will link to other parts of the page so users can quickly find what they're
looking for.

- An attractive Hero Banner with a background SVG
- Features section that outlines the product/services benefits
- Service Section which provides the user with an idea of what they can expect
  after purchasing the service
- Team section which provides an overview of the companies staff
- The all important testimonial section that utilizes social proof so customers
  feel at ease with purchasing this product/service
- Footer section with a sitemap and extra details about the company

## Getting Started

For those who wish to utilzies this template, you should first download/clone
the repo from my [github](https://github.com/IM-Deane/nextjs-landing-page).

After you've downloaded the template, you can open it in your favorite code
editor (I used VS Code) and install the dependencies.

For the novices, to install the dependencies you should use a package manager
such as npm or yarn (I used npm). Once one of these have been enabled, you can
open your terminal in VS Code, and run the manager's install command (npm
install).

After the dependencies have been installed, you can start the development server
using your package manager (npm run dev). The server should default to
http://localhost:3000.

Here is an example to get you going:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

# Version History:

_Version 1.0.0:_

Added a footer component with small site nav menu.

The footer generates the menu and copyright statement based off of the data
provided by "footer.data.js". This enables the developer to quickly modify the
content.

# Note:

This version marks the end of the template's core functionality. Future updates
will likely focus on extending the site's functionality and making it easier to
customize.

_Version 0.0.6:_

Implemented a team member section and testimonial section.

- Team members: displays the companies primary employees. It can be substituted
  for an "About Us" section that explains the companies values. The team social
  media accounts can also be hidden if needed.

- Testimonials: displays the companies satisfied customers. This is crucial for
  the social proof angle. If the reviews are coming from Google, then it should
  be easy to link the reviews profile (therefore getting their details). If the
  review was submitted in another way or there is no profile available, it might
  be a good idea to subsitute the companies logo.

_Version 0.0.5:_

Added a features section, workflow section, and pricing section.

- Features: Outlines the product/service's core features.

- Workflow: For services/products that need an explanation, the workflow section
  provides a guided outline.

- Pricing: This section displays various pricing plans. For desktop, the plans
  are aligned in a single row. For smaller devices, they are in a carousel
  format. This enables a responsive experience.

_Version 0.0.4:_

Implemented the Services section. This section contains a list of the companies
services as well as a video player.

Note: The video player will default to a coding music playlist on youtube.

_Version 0.0.3:_

Added Feature section and custom sectionHeader component. The section header is
a reuseable component that can be called in other sections. This utilizes the
DRY software development principle.

_Version 0.0.2:_

Implemented the site's navbar/header. This component features a responsive
navbar that includes a mobile side drawer.

The drawer gracefully handles users with smaller devices and includes social
media links at the bottom.

_Version 0.0.1:_

Implemented site's boilerplate
