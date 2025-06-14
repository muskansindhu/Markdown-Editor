export const sectionList = [
  {
    slug: "top",
    title: "Top",
    markdown:
      '<a href="https://aimeos.org/">\n    <img src="https://aimeos.org/fileadmin/template/icons/logo.png" alt="Aimeos logo" title="Aimeos" align="right" height="60" />\n</a>',
  },
  {
    slug: "aimeos-typo3-extension",
    title: "Aimeos TYPO3 extension",
    markdown:
      "# Aimeos TYPO3 extension\n\n[![Total Downloads](https://poser.pugx.org/aimeos/aimeos-typo3/d/total.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)\n[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/?branch=master)\n[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)\n\n:star: Star us on GitHub \u2014 it motivates us a lot!\n\n[Aimeos](https://aimeos.org/TYPO3) is THE professional, full-featured and\nhigh performance e-commerce extension for TYPO3! You can install it in your\nexisting TYPO3 web site within 5 minutes and can adapt, extend, overwrite\nand customize anything to your needs.\n\n![aimeos-frontend](https://user-images.githubusercontent.com/8647429/212348410-55cbaa00-722a-4a30-8b57-da9e173e0675.jpg)",
  },
  {
    slug: "table-of-content",
    title: "Table Of Content",
    markdown:
      "## Table Of Content\n\n- [Installation](#installation)\n  - [Composer](#composer)\n  - [DDev or Colima](#ddev)\n  - [TER](#ter-extension)\n- [TYPO3 setup](#typo3-setup)\n  - [Database setup](#database-setup)\n  - [Security](#security)\n- [Page setup](#page-setup)\n  - [Download the Aimeos Page Tree t3d file](#download-the-aimeos-page-tree-t3d-file)\n  - [Go to the Import View](#go-to-the-import-view)\n  - [Upload the page tree file](#upload-the-page-tree-file)\n  - [Go to the import view](#go-to-the-import-view)\n  - [Import the page tree](#import-the-page-tree)\n  - [SEO-friendly URLs](#seo-friendly-urls)\n- [License](#license)\n- [Links](#links)",
  },
  {
    slug: "installation",
    title: "Installation",
    markdown:
      "## Installation\n\nThis document is for the latest Aimeos TYPO3 **23.10 release and later**.\n\n- LTS release: 24.10 (TYPO3 12/13 LTS)\n- Old LTS release: 23.10 (TYPO3 12 LTS)\n\n### Composer\n\n**Note:** composer 2.1+ is required!\n\nThe latest TYPO3 version can be installed via composer. This is especially useful, if you want to create new TYPO3 installations automatically or play with the latest code. You need to install the composer package first, if it isn't already available:\n\n```bash\nphp -r \"readfile('https://getcomposer.org/installer');\" | php -- --filename=composer\n```\n\nTo install the TYPO3 base distribution first, execute this command:\n\n```bash\ncomposer create-project typo3/cms-base-distribution myshop",
  },
  {
    slug: "or-install-a-specific-typo3-version",
    title: "or install a specific TYPO3 version:",
    markdown:
      '# or install a specific TYPO3 version:\ncomposer create-project "typo3/cms-base-distribution:^13" myshop\n```\n\nIt will install TYPO3 into the `./myshop/` directory. Change into the directory and install TYPO3 as usual:\n\n```bash\ncd ./myshop\ntouch public/FIRST_INSTALL\n```\n\nOpen the TYPO3 URL in your browser and follow the setup steps. Afterwards, install the Aimeos extension using:\n\n```bash\ncomposer req -W aimeos/aimeos-typo3:~24.10\n```\n\nIf composer complains that one or more packages can\'t be installed because the required minimum stability isn\'t met, add this to your `composer.json`:\n\n```json\n"minimum-stability": "dev",\n"prefer-stable": true,\n```\n\nIf you want a more or less working installation out of the box for new installations, you can install the Bootstrap package too:\n\n```bash\ncomposer req bk2k/bootstrap-package\n```\n\n**_Note_**: Remember to create a root page and a root template, which includes the Bootstrap package templates! (See also below.)\n\nFinally, depending on your TYPO3 version, run the following commands from your installation directory:\n\n```bash\nphp ./vendor/bin/typo3 extension:setup\nphp ./vendor/bin/typo3 aimeos:setup --option=setup/default/demo:1\n```\n\nIf you don\'t want to add the Aimeos demo data, you should remove `--option=setup/default/demo:1` from the Aimeos setup command.\n\nIf you experience any errors with the database, please check the [Database Setup](#database-setup) section below.\n\n### DDev\n\n_Note:_ Installation instructions for TYPO3 with `ddev` or `Colima` can be found here:\n[TYPO3 with ddev or colima](https://ddev.readthedocs.io/en/latest/users/quickstart/)\n\n### TER Extension\n\nIf you want to install Aimeos into a traditionally installed TYPO3 ("legacy installation"), the [Aimeos extension from the TER](https://typo3.org/extensions/repository/view/aimeos) is recommended. You can download and install it directly from the Extension Manager of your TYPO3 instance.\n\n- Log into the TYPO3 backend\n- Click on "Admin Tools::Extensions" in the left navigation\n- Click the icon with the little plus sign left from the Aimeos list entry\n\n![Install Aimeos TYPO3 extension](https://user-images.githubusercontent.com/213803/211545083-d0820b63-26f2-453e-877f-ecd5ec128713.jpg)\n\nAfterwards, you have to execute the update script of the extension to create the required database structure:\n\n- Click on "Admin Tools::Upgrade"\n- Click "Run Upgrade Wizard" in the "Upgrade Wizard" tile\n- Click "Execute"\n\n![Execute update script](https://user-images.githubusercontent.com/213803/211545122-8fd94abd-78b2-47ad-ad3c-1ef1b9c052b4.jpg)\n\n#### Aimeos Distribution\n\nFor new TYPO3 installations, there is a 1-click [Aimeos distribution](https://typo3.org/extensions/repository/view/aimeos_dist) available, too. Choose the Aimeos distribution from the list of available distributions in the Extension Manager and you will get a completely set up shop system including demo data for a quick start.',
  },
  {
    slug: "typo3-setup",
    title: "TYPO3 Setup",
    markdown:
      "## TYPO3 Setup\n\nSetup TYPO3 by creating a `FIRST_INSTALL` file in the `./public` directory:\n\n```bash\ntouch public/FIRST_INSTALL\n```\n\nOpen the URL of your installation in the browser and follow the steps in the TYPO3 setup scripts.\n\n### Security\n\nSince **TYPO3 9.5.14+** implements **SameSite cookie handling** and restricts when browsers send cookies to your site. This is a problem when customers are redirected from external payment provider domain. Then, there's no session available on the confirmation page. To circumvent that problem, you need to set the configuration option `cookieSameSite` to `None` in your `./typo3conf/LocalConfiguration.php` or `./config/system/settings.php`:\n\n```php\n    'FE' => [\n        'cookieSameSite' => 'None'\n    ]\n```",
  },
  {
    slug: "site-setup",
    title: "Site Setup",
    markdown:
      '## Site Setup\n\nTYPO3 10+ requires a site configuration which you have to add in "Site Management" > "Sites" available in the left navigation. When creating a root page (a page with a globe icon), a basic site configuration is automatically created (see below at [Go to the Import View](#go-to-the-import-view)).',
  },
  {
    slug: "page-setup",
    title: "Page Setup",
    markdown:
      '## Page Setup\n\n### Download the Aimeos Page Tree t3d file\n\nThe page setup for an Aimeos web shop is easy, if you import the example page tree for TYPO3 10/11. You can download the version you need from here:\n\n- [24.10+ page tree](https://aimeos.org/fileadmin/download/Aimeos-pages_2024.10-2.t3d) and later\n- [23.10 page tree](https://aimeos.org/fileadmin/download/Aimeos-pages_2023.04.t3d)\n\n**Note:** The Aimeos layout expects [Bootstrap](https://getbootstrap.com) providing the grid layout!\n\nIn order to upload and install the file, follow the following steps:\n\n### Go to the Import View\n\n**Note:** It is recommended to import the Aimeos page tree to a page that is defined as "root page". To create a root page, simply create a new page and, in the "Edit page properties", activate the "Use as Root Page" option under "Behaviour". The icon of the root page will change to a globe. This will also create a basic site configuration. Don\'t forget to also create a typoscript root template and include the bootstrap templates with it!\n\n![Create a root page](https://user-images.githubusercontent.com/213803/211549273-1d3883dd-710c-4e27-8dbb-3de6e45680d7.jpg)\n\n- In "Web::Page", right-click on the root page (the one with the globe)\n- Click on "More options..."\n- Click on "Import"\n\n![Go to the import view](https://user-images.githubusercontent.com/213803/211550212-df6daa73-74cd-459e-8d25-a56c413c175d.jpg)\n\n### Upload the page tree file\n\n- In the page import dialog\n- Select the "Upload" tab (2nd one)\n- Click on the "Select" dialog\n- Choose the T3D file you\'ve downloaded\n- Press the "Upload files" button\n\n![Upload the page tree file](https://user-images.githubusercontent.com/8647429/212347778-17238e05-7494-4413-adb3-a54b2b524e05.png)\n\n### Import the page tree\n\n- In Import / Export view\n- Select the uploaded file from the drop-down menu\n- Click on the "Preview" button\n- The pages that will be imported are shown below\n- Click on the "Import" button that has appeared\n- Confirm to import the pages\n\n![Import the uploaded page tree file](https://user-images.githubusercontent.com/8647429/212348040-c3e10b60-5579-4d1b-becc-72548826c6db.png)\n\nNow you have a new page "Shop" in your page tree including all required sub-pages.\n\n### SEO-friendly URLs\n\nTYPO3 9.5 and later can create SEO friendly URLs if you add the rules to the site config:\n[https://aimeos.org/docs/latest/typo3/setup/#seo-urls](https://aimeos.org/docs/latest/typo3/setup/#seo-urls)',
  },
  {
    slug: "license",
    title: "License",
    markdown:
      "## License\n\nThe Aimeos TYPO3 extension is licensed under the terms of the GPL Open Source\nlicense and is available for free.",
  },
  {
    slug: "links",
    title: "Links",
    markdown:
      "## Links\n\n- [Web site](https://aimeos.org/integrations/typo3-shop-extension/)\n- [Documentation](https://aimeos.org/docs/TYPO3)\n- [Forum](https://aimeos.org/help/typo3-extension-f16/)\n- [Issue tracker](https://github.com/aimeos/aimeos-typo3/issues)\n- [Source code](https://github.com/aimeos/aimeos-typo3)",
  },
];
