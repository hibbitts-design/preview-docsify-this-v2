<div class="docsifythisimagebanner">
  <img class="background-image" src="images/milad-fakurian-CN2FEPXERRI-unsplash.jpg"  alt="3D Render by Milad Fakurian on Unsplash">
  <div class="overlay">
    <h1><b>Docsify-This</b></h1>
  </div>
</div>

# Display an online Markdown file as a web page in seconds.

This [open-source web app](https://github.com/hibbitts-design/docsify-this), built with the magical documentation site generator [Docsify](https://docsify.js.org), provides a quick way to display online Markdown files as standalone web pages without needing to setup your own website. All you need is a publicly available Markdown file and pass that URL to https://docsify-this.net. Try it out below!

<div id="docsifythisurlbuilder">

## Web Page Builder

Enter the URL of a Markdown file below and view that file as a web page in a new Browser tab. The resulting Docsify-This page URL can be copied and shared or used as an iFrame source URL.

**Markdown File URL** (GitHub or raw source URL):</br>
<input name="markdownFileURL" aria-label="markdown file url" id="docsifythisurlfield" type="url" onfocus="this.select()" onclick="this.select()" onkeypress="checkKey(event);" size="200px" value="https://github.com/hibbitts-design/docsify-this-one-page-article/blob/main/home.md" />
<input class="docsifythisurlbuilderprimarybutton" style="border:none;" type="button" id="btn_1" value="View as Standalone Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/></br>

Page layout:

<div style="display: flex; margin-top: -3px;">

<label>
  <input type="radio" name="pagestyle" id="stylecontentonly" checked>
  <img style="padding: 2px;" src="images/contentonly.png" alt="Page Content Only" title="Page Content Only" >
  <figcaption id="caption">Content Only</figcaption>
</label>

<label>
  <input type="radio" name="pagestyle" id="styletoc">
  <img style="padding: 2px;" src="images/toc.png" alt="Page with Table of Contents" title="Page with Table of Contents">
  <figcaption id="caption">Table of Contents</figcaption>
</label>

<label>
  <input type="radio" name="pagestyle" id="stylesidebar" >
  <img style="padding: 2px;" src="images/sidebar.png" alt="Page with Docsify Sidebar (collapsible)" title="Page with Docsify Sidebar (collapsible)">
  <figcaption id="caption">Docsify Sidebar</figcaption>
</label>

</div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editCheck" unchecked><label for="editCheck">Include 'Edit this Page' link with public GitHub files (default location is bottom of page)</label></div>

<div id="docsifythisurlbuildershowhidelink"><a name="toggleDivlink" href="#" onclick="toggleDiv(this); return false;">Show More Page Options &raquo;</a></div>

<div id="docsifythisurlbuilderoptionsDiv" style='display: none'>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label for="fontfamily">Set the page font family and size to:</label><br>
<select class="docsifythisurlbuilderoptionsline" id="fontfamily" name="fontfamily">
  <option value="default">Source Sans Pro</option>
  <option disabled="disabled">----</option>
  <option value="Arial,sans-serif">Arial, sans-serif</option>
  <option value="Helvetica,sans-serif">Helvetica, sans-serif</option>
  <option value="Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif">Lato, sans-serif (Canvas LMS)</option>
  <option value="Verdana">Verdana, sans-serif</option>
  <option value="Tahoma">Tahoma, sans-serif</option>
  <option value="Times%20New%20Roman, serif">Times New Roman, serif</option>
  <option value="Georgia,serif">Georgia, serif</option>
  <option value="Courier,monospace">Courier, monospace</option>
</select>
<select class="docsifythisurlbuilderoptionsline" id="fontsize" name="fontsize">
  <option value="1.125">18px (1.125rem)</option>
  <option disabled="disabled">----</option>
  <option value=".875">14px (.875rem)</option>
  <option value="1">16px (1rem)</option>
  <option value="1.25">20px (1.25rem)</option>
</select>
</div>

<div class="docsifythisurlbuilderoptionsline"><label type="color">Set the page link color to:</label><br># <input type="text" maxlength="6" size="6" value="0374B5" id="linkcolor" style="text-transform:uppercase" oninput="validateColorAndUpdatePreview()"/><span id="linkcolorpreview""></span></div>

<div class="docsifythisurlbuilderoptionsline"><label>Set the text of the 'Edit this Page' link to:</label><br><input type="text" value="Edit this Page" id="editLinkText" name="editLinkText"></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="editLinkTopCheck" unchecked><label for="editLinkTopCheck">Set location of the 'Edit this Page' link to top of page</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hideCredits" unchecked><label for="hideCredits">Remove the Docsify-This credit text from bottom of page</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label for="tocheadings">Headings to include in Table of Contents (at least one required):</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch1"  unchecked><label for="toch1">Heading 1 (h1)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch2" checked><label for="toch2">Heading 2 (h2)</label></div>
<div class="docsifythisurlbuilderoptionsindentedline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="toch3" unchecked><label for="toch3">Heading 3 (h3)</label></div>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="narrowToC" unchecked><label for="narrowToC">Use a narrower Table of Contents area, along with a smaller screen breakpoint</label></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><label>Set the maximum Header level (1-6) of Docsify sidebar:</label><br><input type="number" size="1" value="2" min="1" max="6" id="maxLevel" name="maxLevel"></div>

<hr>

<div class="docsifythisurlbuilderoptionsline"><input class="docsifythisurlbuildercheckbox" type="checkbox" id="hypothesis" unchecked><label for="hypothesis">Enable page annotation with Hypothes.is, an open source web annotation tool</label></div>

<input class="docsifythisurlbuilderprimarybutton" style="border:none;margin-top: 10px;" type="button" id="btn_1" value="View as Standalone Web Page" onclick="openURLs(document.getElementById('docsifythisurlfield').value)"/>

<div id="docsifythisurlbuilderrestoredefaultsbutton"><input style="color: #323232;" type="button" id="btn_4" value="Reset to Defaults" onclick="restoreAllDefaults()"/></div>

</div>

</div>

## All About Docsify-This

* [How it Works](/?id=how-it-works)
* [Ready-to-Use Docsify-This Markdown Templates](/?id=ready-to-use-docsify-this-markdown-templates)
* [More Docsify-This Markdown Examples](/?id=more-docsify-this-markdown-examples)
* [Page Appearance URL Parameters](/?id=page-appearance-url-parameters)
* [Supported Markdown CSS Classes](/?id=supported-markdown-css-classes)
* [Tips and Techniques](/?id=tips-and-techniques)
* [Improving Markdown Previews in Text Editors](/?id=improving-markdown-previews-in-text-editors)
* [Looking for Even More Customization and Control?](/?id=looking-for-even-more-customization-and-control)
* [Troubleshooting](/?id=troubleshooting)
* [Privacy Policy Summary](/?id=privacy-policy-summary)
* [Support this Project](/?id=support-this-project)

---

### How it Works

Docsify-This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site configured to render remote Markdown files via URL parameters in the following format (automatically created by the above Web Page Builder):

<p style="word-wrap: break-word; margin-top: 1rem; padding: 6px; background-color: #666666; color: #F1F1F1; font-weight:normal; font-size: x-large; border-radius: 3px;">https://docsify-this.net?basePath=<span style="font-weight:bold">URLpath<span style="font-weight:normal">&homepage=<span style="font-weight:bold">filename.md</p>

The **basePath** Docsify parameter is the URL path containing the raw source Markdown file to render. If the file is named the expected default **README.md** then no other parameter are required, otherwise the **homepage** Docsify parameter must also be included set to the name of the file to render. An example Docsify-This URL would be:
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&homepage=home.md  

To render a file stored in a public GitHub repository you need to use the raw source URL of that file (i.e. raw.githubusercontent.com) - tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file) to get this URL when not using the above Web Page Builder, which does this automatically. It is also possible to render a file stored in a private GitHub repository by activating GitHub Pages within that repository and then using the GitHub Pages URL of that file (i.e. username.github.io).  

The appearance of rendered Markdown files can be customized by optional [URL parameters](/?id=page-appearance-url-parameters) and a small set of available [CSS Classes](/?id=supported-markdown-css-classes) within source Markdown files. In addition to supporting standard Markdown, [Embed.ly](https://embed.ly/code), [H5P](https://h5p.org/), [Katex](https://github.com/upupming/docsify-katex), and [Mermaid Diagrams](https://github.com/Leward/mermaid-docsify) are included. Optionally, page annotation with [Hypothes.is](https://hypothes.is) can be enabled.

---

### Ready-to-Use Docsify-This Markdown Templates

While all you need to get going with Docsify-This is a basic Markdown file, here are some templates (with step-by-step how to use instructions) you can use that show what is possible with Markdown, images, and even a few HTML snippets!

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This One Page Course Template](images/docsify-this-one-page-course.png ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This One Page Course Template](https://github.com/paulhibbitts/docsify-this-one-page-course)

One Page Course [home.md](https://github.com/paulhibbitts/docsify-this-one-page-course/blob/main/home.md) file displayed by Docsify-This as a:   
* [Standalone Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-one-page-course/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Standalone Page")  
* [Standalone Page with Table of Contents and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-one-page-course/main&homepage=home.md&toc=true&edit-link=https://github.com/paulhibbitts/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Table of Contents")  
* [Standalone Page with Docsify Sidebar and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-one-page-course/main&homepage=home.md&sidebar=true&edit-link=https://github.com/paulhibbitts/docsify-this-one-page-course/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Docsify Sidebar")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This One Page Article Template](images/docsify-this-one-page-article.png ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This One Page Article Template](https://github.com/paulhibbitts/docsify-this-one-page-article)

One Page Article [home.md](https://github.com/paulhibbitts/docsify-this-one-page-article/blob/main/home.md) file displayed by Docsify-This as a:  
* [Standalone Page](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-one-page-article/main&homepage=home.md "Single Page Docsify Open Course Starter Kit - Standalone Page")  
* [Standalone Page with Table of Contents including h2 and h3 Headers and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-one-page-article/main&homepage=home.md&toc=true&toc-headings=h2,h3&edit-link=https://github.com/paulhibbitts/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Table of Contents")  
* [Standalone Page with Docsify Sidebar with maxLevel of 3 (H3) and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-one-page-article/main&homepage=home.md&sidebar=true&maxLevel=3&edit-link=https://github.com/paulhibbitts/docsify-this-one-page-article/blob/main/home.md "Single Page Docsify Open Course Starter Kit - Standalone Page with Docsify Sidebar")

</div>
</div>
</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This LMS Content Pages Template](images/docsify-this-lms-pages.png ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This LMS Content Pages Template](https://github.com/paulhibbitts/docsify-this-lms-pages-for-embedding)

Example pages, including the use of the `font-family`, `font-size` and `hide-credits` URL parameters for seamless content embedding within the Canvas LMS, as displayed by Docsify-This:  
* [Embeddable Home Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=home.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable Home Page")
* [Embeddable Weekly Module Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=module-01.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable Weekly Module Page")
* [Embeddable Schedule Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=schedule.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable Schedule Page")
* [Embeddable Topics Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=topics.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable Topics Page")
* [Embeddable Resource Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=resources.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable Resource Page")
* [Embeddable UX Techniques Guide Page (using Accordion format)](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=ux-techniques-guide.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable UX Techniques Guide Page (using Accordion format)")
* [Embeddable Contact Page](https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-lms-content-pages/main&homepage=contact.md&font-family=Lato%20Extended,%20Lato,Helvetica%20Neue,%20Helvetica,%20Arial,%20sans-serif&amp;font-size=1&amp;link-color=0374B5&amp;hide-credits=true "Embeddable Contact Page")

</div>

</div>

<div class="row">

<div class="docsifythiscolumn35" >

![Docsify-This Multiple Page Site](images/docsify-this-multiple-page-site.png ':class=docsify-this-screenshot')

</div>

<div class="docsifythiscolumn65" >

#### [Docsify-This Multiple Page Site Template](https://github.com/hibbitts-design/docsify-this-multiple-page-site)

Multiple Page Site [home.md](https://github.com/paulhibbitts/docsify-this-multiple-page-site/blob/main/home.md) file, including the use of the Markdown CSS class `header-image-full-width`, displayed by Docsify-This as:  
* [Standalone Pages](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-multiple-page-site/main&homepage=home.md "Docsify-This Multiple Page Site - Standalone Pages")  
* [Standalone Pages and 'Edit this Page' links](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-multiple-page-site/main&homepage=home.md&edit-link=https://github.com/paulhibbitts/docsify-this-multiple-page-site/blob/main/home.md "Docsify-This Multiple Page Site - Standalone Pages")  
* [Standalone Pages with Docsify Navbar](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar "Docsify-This Multiple Page Site - Standalone Pages with Docsify Navbar and an 'Edit this Page' link")  
* [Standalone Pages with Docsify Navbar and 'GitHub Repository' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/docsify-this-multiple-page-site/main&homepage=home.md&loadNavbar=_navbar&edit-link=https://github.com/paulhibbitts/docsify-this-multiple-page-site&edit-link-text=GitHub%20Repository "Docsify-This Multiple Page Site - Standalone Pages with Docsify Navbar and an 'GitHub Repository' link")  

</div>
</div>
</div>

---

### More Docsify-This Markdown Examples

[GitHub Training Manual Working Locally with Git Markdown file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed by Docsify-This as a:  
* [Standalone Page](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md "GitHub Training Manual Working Locally with Git - Standalone Page")  
* [Standalone Page with Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true&toc-headings=h2,h3 "GitHub Training Manual Working Locally with Git - Standalone Page with Table of Contents")
* [Standalone Page with Docsify Sidebar](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&sidebar=true&maxLevel=3 "GitHub Training Manual Working Locally with Git - Standalone Page with Docsify Sidebar")

[Easy Markdown to Github Pages linked set of Markdown files](https://github.com/nicolas-van/easy-markdown-to-github-pages), displayed by Docsify-This as:   
* [Standalone Pages](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master "Easy Markdown to Github Pages - Standalone Page")  
* [Standalone Pages with Table of Contents and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&toc=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Standalone Page with Table of Contents")  
* [Standalone Pages with Docsify Sidebar and an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/nicolas-van/easy-markdown-to-github-pages/master&sidebar=true&edit-link=https://github.com/nicolas-van/easy-markdown-to-github-pages/blob/master/README.md "Easy Markdown to Github Pages - Standalone Page with Docsify Sidebar")

[A Collection of Markdown files](https://github.com/paulhibbitts/cmpt-363-222-pages) used as course content [within a Canvas LMS site](https://canvas.sfu.ca/courses/69678).

[Markdown Content Demo file](https://github.com/paulhibbitts/markdown-content-demo/blob/main/README.md), displayed by Docsify-This as a [Standalone Page with an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/paulhibbitts/markdown-content-demo/main&edit-link=https://github.com/paulhibbitts/markdown-content-demo/blob/main/README.md#/).  

[GitHub's LaTeX Support Examples Markdown file](https://github.com/dotcom-poland/medium-latex-support/blob/main/README.md), displayed by Docsify-This as a [Standalone Page with Table of Contents](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/dotcom-poland/medium-latex-support/main&toc=true).

[Mermaid-Docsify Example Markdown file](https://github.com/Leward/mermaid-docsify/blob/master/example/README.md), displayed by Docsify-This as a [Standalone Page with an 'Edit this Page' link](https://paulhibbitts.github.io/test-docsify-this/?basePath=https://raw.githubusercontent.com/Leward/mermaid-docsify/master/example&edit-link=https://github.com/Leward/mermaid-docsify/blob/master/example/README.md#/).  

---

### Page Appearance URL Parameters

**edit-link**  
Display a "Edit this Page" link (default location is bottom of page) with the optional **edit-link** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md

**edit-link-text**  
Change the default text for a "Edit this Page" link with the optional **edit-link-text** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-text=View%20as%20Markdown Please note to use text with spaces they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "View as Markdown" would be "View%20as%20Markdown".  

**edit-link-top**  
Change the location of the "Edit this Page" link from the bottom of pages to be the top of pages with the optional **edit-link-top** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true&edit-link=https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/README.md&edit-link-top=true

**font-family**  
Set a custom font for your standalone pages with the optional **font-family** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-family=Helvetica,Arial,sans-serif. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note to use fonts with spaces in their names they must be [encoded](https://meyerweb.com/eric/tools/dencoder/), so "Courier New" would be "Courier%20New".  

**font-size**  
Set a custom font size for your standalone pages with the optional **font-size** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&font-size=1. This parameter can be particularly valuable when trying to better match the visual presentation of embedded content with your destination platform. Please note the font size is set in [REM units](https://www.freecodecamp.org/news/what-is-rem-in-css/).  

**hide-credits**  
Hide the credits usually shown at the bottom of every displayed Docsify-This page with the optional **hide-credits** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hide-credits=true.

**hypothesis**  
Enable page annotation with [Hypothes.is](https://hypothes.is) with the optional **hypothesiss** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&hypothesis=true.

**link-color**  
Set a custom color for all links, defined using the standard hexadecimal format _without the '#' symbol_ with the optional **link-color** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/docs&homepage=resources.md&link-color=CC0000.

**loadFooter**  
Load a Docsify footer from the Markdown file passed with the optional **loadFooter** Docsify parameter (not included in the Web Page Builder), for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadFooter=_footer.md_

**loadNavbar**  
Load a Docsify navbar from the Markdown file passed with the optional **loadNavbar** Docsify parameter (not included in the Web Page Builder), for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&loadNavbar=_navbar.md_

**maxLevel**  
Set the maximum header level of the Docsify sidebar with the optional **maxLevel** Docsify parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&sidebar=true&maxLevel=3 

**sidebar**  
Display a Docsify sidebar with the optional **sidebar** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&sidebar=true 

**toc**  
Display a page table of contents with the optional **toc** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

**toc-headings**  
Set the page heading levels (i.e. h1, h2, etc.) to be included in the Page Table of Contents with the optional **toc-headings** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true&toc-headings=h1,h2,h3.

**toc-narrow**  
Use a less wide Page Table of Contents with the optional **toc-narrow** parameter, for example:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc-narrow=true. This parameter can be particularly valuable when embedding content where a smaller screen area is likely.  

---

### Supported Markdown CSS Classes

`badge`  

```html
<span class='badge'> Tue Jun 12th 11:59pm PDT</span>
```

`banner-image`  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')
```

`banner-tall-image`  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-tall-image')
```

`button`  

```markdown
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button')
```

`embedly-card` (for linked article previews, embedded slides/videos, etc.)  

```markdown
<a class="embedly-card" data-card-controls="0" data-card-align="left" href="https://blog.prototypr.io/defining-usability-e7bf42e8abd0">Defining usability</a>
```

`banner-image` (cropped to height of 250px on large screens, 125px on small screens)  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')
```

`banner-tall-image` (cropped to height of 350px on large screens, 175px on small screens)  

```markdown
![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-tall-image')
```

`header-image-fade` (suggested width of 1200px to 2000px)  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image-fade')
```

`header-image-full-width` (suggested size of 1200px to 2000px width and 400px to 600px height, and display of Table of Contents is not available)  

```markdown
![Photo of Mountain](images/mountain.jpg ':class=header-image')
```

`row` & `column`  

```html
<div class="row">
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
<div class="column">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

</div>
</div>
```

`video-container-4by3`  

```html
<div class="video-container-4by3"><div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

`video-container-16by9`  
```html
<div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ"></iframe></div>
```

---

### Tips and Techniques

**Matching Fonts with Your Destination Platform Content**  
Use a page inspector to identify the font family and font size used in the platform you are embedding Docsify-This content in, and then pass that font family using the `font-familiy` ([encoded](https://meyerweb.com/eric/tools/dencoder/), where spaces are replaced with '%20') and `font-size` (REM units) URL parameters to Docsify-This. For example, to match fonts with the Canvas LMS:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363-222-pages/main&homepage=topics.md&font-family=Lato%20Extended,Lato,Helvetica%20Neue,Helvetica,Arial,sans-serif&font-size=1  

**Providing a Page Table of Contents within a Smaller Destination Platform Screen Area**  
If you want to include a Page Table of Contents with embedded Docsify-This content, but the destination platform screen area is not very wide, you might want to try the optional `toc-narrow` display option. For example, to use a narrower Table of Contents area that includes a smaller screen breakpoint:
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363/main/docs/222&homepage=week-01.md&toc-narrow=true  

---

### Improving Markdown Previews in Text Editors

Some text editors, such as [Microsoft Visual Studio](https://code.visualstudio.com/), have the ability to link your own CSS so Markdown previews are more visually accurate. If your editor supports this ability, the below CSS files can be used.

Docsify-This (based on the Docsify Open Publishing Starter Kit) CSS:  
https://docsify-this.net/assets/css/editor.css

FontAwesome CSS:  
https://docsify-this.net/assets/vendor/fontawesome/css/all.min.css

---

### Looking for Even More Customization and Control?

Docsify-This is intended as a quick way to display one or more remotely located Markdown files. To further customize the rendering of remote files, install your own instance of [Docsify-This](https://github.com/hibbitts-design/docsify-this) enabling GitHub Pages with the folder `/docs`.  If you want to run Docsify-This on your own Websever, create a destination folder on your server and then copy the files within the Docsify-This folder `/docs` to your newly created server folder.  

If you want to further customize and control the presentation of your Markdown content, especially when rendering multiple page sites, you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted web app is based on) and store all Markdown files within that site. You can learn more about the capabilities of Docsify itself at [Docsify.js.org](https://docsify.js.org).  

---

### Troubleshooting

_'404 - Not found' message is displayed._  
The provided **basePath** parameter and/or optional **homepage** parameter may not be correct, verify that these items lead to accessible content. This error message may also be a result of a Cross-Origin Resource Sharing (CORS) policy, which restricts resources on a web page to be requested from another domain. If possible, relocate files to a domain that supports cross-origin requests.

_Updated Markdown file not displayed in the Browser._  
Docsify is likely displaying the last cached version. To ensure the most recent version of a file is loaded, do a [hard refresh of your Browser cache](https://www.makeuseof.com/hard-refresh-browser/).

_Embedded image not displayed as expected._  
The most likely cause for embedded images in Markdown not being displayed as expected is the use of relative paths (i.e. `![Alt Text](images/filename.jpg)`) - review image paths and ensure the full path to each image is used (i.e. `![Alt Text](/folder/images/filename.jpg)`). Likewise, if images in HTML are not being displayed as expected the likely cause is again the use of relative paths (i.e. `<img src="images/filename.jpg" alt="Alt Text">`) - use absolute URLs for HTML image sources (i.e. `<img src="https://raw.githubusercontent.com/user/repository/main/images/filename.jpg" alt="Alt Text">`).

_Embedded iFrame not displayed as expected._   
Due to iframe cross-domain issues embedded content may not be able to be displayed. Use the included rich media embed service [embed.ly](https://embed.ly/) as a workaround.  

For example, the following iFrame HTML:  

```
<div class="video-container-16by9"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
```

Would be changed to:  

```
<a class="embedly-card" data-card-controls="0" data-card-align="left" data-card-width="100%" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
```

---

### Privacy Policy Summary

* This website is hosted by [GitHub Pages, which is GDPR compliant](https://github.blog/2018-04-19-updates-to-our-privacy-statement-and-terms-of-service/)
* Only this web page (containing the Web Page Builder) uses [Google Analytics in a GDPR manner](https://support.google.com/analytics/answer/9019185?hl=en#IP&zippy=%2Cin-this-article)
* Web pages generated by remote Markdown files are not tracked in any manner by Google Analytics
* The web service [H5P](https://h5p.org/privacy) is automatically loaded when displaying remote Markdown files
* The web service [Hypothes.is](https://web.hypothes.is/privacy/) is only loaded if chosen when displaying remote Markdown files
* The web service [Embed.ly](https://embed.ly/legal/privacy) is only loaded if [Embedly Card](https://embed.ly/cards) elements are present in remote Markdown files

---

### Support this Project

- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this)
- 🐦 [tweet out your thoughts](https://twitter.com/intent/tweet?text=I+am+checking+out+the+Docsify-This.net+project+that+displays+Markdown+files+as+web+pages+in+seconds.+You+can+learn+about+the+project+at&url=https%3A%2F%2Fgithub.com%2Fhibbitts-design%2Fdocsify-this&hashtags=docsify,remote,markdown,file,webpage)
- Share your 💬 [feedback in a brief survey](https://forms.gle/ViYu2ZdPmj6PeQ439)
- Follow [@hibbittsdesign](https://twitter.com/hibbittsdesign) for updates

Paul offers a range of services related to using the system-independent format of Markdown in a range of education and publication scenarios, especially in relation to his [Docsify](https://docsify.js.org/#/) and [Grav CMS](https://getgrav.org/) open source projects. These professional services include consulting, premium support subscriptions, workshops, and custom development. Sound of interest? Send a note to [paul@hibbittsdesign.org](mailto:paul@hibbittsdesign.org).

---

This [open source project](https://github.com/hibbitts-design/docsify-this) is by Paul Hibbitts of [Hibbitts Design](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
