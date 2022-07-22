# Docsify-This

![3D cubes](images/rohit-choudhari-puy-FW4fOJc-unsplash.jpg  ':class=banner-image')  
Photo by <a href="https://unsplash.com/@lilrohit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rohit Choudhari</a> on <a href="https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Quickly display a Markdown file as a standalone Web page🚀

This Web app, built using the magical documentation site generator [Docsify](https://docsify.js.org) and the [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit), provides a quick way to display Markdown files as standalone Web pages without needing to setup your own Docsify site. All you need is a publicly available Markdown file and pass that URL to https://docsify.this.net. Try it out below!  

Markdown File URL (GitHub or raw source URL):</br>
<input class="myfield" type="URL" autofocus="autofocus" onfocus="this.select()" id="text" size="200px" value="https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md" /></br>
<input class="button mybutton" style="border:none;" type="button" id="btn" value="Display as Standalone Page" onclick="openURLs(document.getElementById('text').value,false)"/> <input class="button mybutton" style="border:none;" type="button" id="btn" value="Display as Standalone Page with Table of Contents" onclick="openURLs(document.getElementById('text').value,true)"/></br>

_To manually get the raw source URL of a file stored on GitHub, tap the **Raw** button when [viewing a file](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file)._

## Examples

* [Docsify Open Publishing Starter Kit README file](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md), displayed as a [Standalone Page](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main/)
* [Docsify Open Publishing Starter Kit README file](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true)

## Technical Details

This is a customized [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) site which can render multiple remote Markdown files (for example, a Markdown file in a GitHub repository).  

For example, to render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main

To render the Markdown file **[README.md](https://github.com/hibbitts-design/docsify-open-course-starter-kit/blob/main/README.md)** (the expected default name) as a standalone page with a table of contents the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-course-starter-kit/main&toc=true

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page, the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md

To render the Markdown file **[introduction.md](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/docs/introduction.md)** as a standalone page with a table of contents, the URL would be:  
https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-open-publishing-starter-kit/main/docs&homepage=introduction.md&toc=true

_TIP: If not a README.md file, the filename will also need to be passed using the **homepage** URL parameter._

## Additional Examples

* [GitHub Training Manual Working Locally with Git file](https://github.com/githubtraining/training-manual/blob/main/docs/06_working_locally.md), displayed as a [Standalone Page with a Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/githubtraining/training-manual/main/docs&homepage=06_working_locally.md&toc=true#/)
* [Single Page Docsify Open Course Starter Kit](https://github.com/paulhibbitts/cpt-363-user-interface-design/blob/main/README.md), displayed as a [Standalone Page with a Table of Contents](https://paulhibbitts.github.io/test-docsify-this?basePath=https://raw.githubusercontent.com/paulhibbitts/cpt-363-user-interface-design/main&toc=true#/)

## Looking for more Customization and Control?

Docsify-This is intended as a quick way to display a remotely located Markdown file. If you want to further customize and control the presentation of your Markdown content you can install your own [Docsify Open Publishing Starter Kit](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit) (that this hosted Web app is based on) and either store Markdown files within that site or with additional configuration render files located remotely. You can learn more about the capabilities of Docsify itself at [Docsify](https://docsify.js.org).

## Troubleshooting

_Embedded iFrame not displaying as expected._   
Due to iframe cross-domain issues embedded content may not be able to be displayed. Use the included rich media embed service [embed.ly](https://embed.ly/) as a workaround.  

For example, the following iFrame HTML:  

```
<div class="video-container-16by9"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRnnRFelgw1ksq_p8Eryg3dnyLCRRLPf5fBgdwdv9p-tCIwcxqWvzDGrGbjxGHL7HqEJVpmV26ntk3a/embed?start=false&loop=false&delayms=3000" frameborder="0" width=780" height="585" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
```

Would be changed to:  

```
<a class="embedly-card" data-card-controls="0" data-card-align="left" href="https://docs.google.com/presentation/d/1BLaaOTsGxDmNcAhg6pdx3hl9IvI8NErg8Oe5ceh83fw/edit?usp=sharing">Grav and Docsify Slides Placeholder</a>
```

## Support the Project

- Add a ⭐️ [star on GitHub](https://github.com/hibbitts-design/docsify-this)
- 🐦 [tweet out your thoughts](https://twitter.com/intent/tweet?text=Check+out+the+Docsify-This+project+at&url=https%3A%2F%2Fgithub.com%2Fhibbitts-design%2Fdocsify-this&hashtags=docsify,remote,markdown,file,webpage)
- Follow [@hibbittsdesign](https://twitter.com/hibbittsdesign) for updates

---

This open source project is by Paul Hibbitts of [Hibbitts Design](https://hibbittsdesign.org/).  

**🙇🏻‍♂️Special Thanks**  
[Beau Shaw](https://github.com/DaddyWarbucks) for his [Remote Docsify](https://github.com/DaddyWarbucks/remote-docsify) example.  
[Alan Levine](https://github.com/cogdog) for the inspiration of a consolidated ReadMe collection.
