---
title: Hello, world!
date: "2023-10-05T14:15:35.000Z"
template: "post"
draft: false
slug: "/posts/hello-world"
category: "Update"
tags:
  - "Blog"
  - "Meta"
  - "Update"
description: "Welcome to another new version of a personal website, how exciting! In this blog you can look back at the past versions and learn why I picked a new framework."
socialImage: "./media/hello-world.png"
---

- [New Site](#new-site)
- [Past Renditions](#past-renditions)
- [Gatsby](#gatsby)
- [What's Next?](#whats-next)

## New Site

Greetings from another website refresh!
This time, with more than just [Bacon Ipsum][baconipsum] placeholder text (a relic of it's late naughties humor).


Starting around 2013, I have toyed on and off with static website tech.
The initial motivation was to start a portfolio of my work and ideas, but in a classic big brain programmer move I spent more time setting things up then showcasing my projects.

Ten years later my work life balance and mindset seem to have looped back to something very similar.


## Past Renditions

#### 2014

I'm honestly struggling to remember what the build was for this, but I believe it's a Boostrap template with the content directly added into the HTML like a cave dweller.

Who doesn't enjoy a 'my website' title on a website?!

![Website in 2014][website2014]


#### 2017

This version was the peak of my node and grunt exploration.
Becoming quick with the CLI, hookin up live refresh and copying around files at various stages of tempalte replacements really is fun. 

![Website in 2017][website2017]


#### 2023

A 'keep it simple' approach using [Jekyll][jekyll], [GitHub][github] Actions and mostly CSS styling.
Mostly due to forgetting all of the node specifics (and a ton of dependabot issues).

![Website in 2023][website2023]


## Gatsby

To have another stab at things, I had a couple of criteria:

* Easier to deploy and maintain that the 2017 node website
* More extendable and customisable than Jekyll, aka not Ruby 

I arrived at [Gatsby JS][gatsby] in combination with [Netlify][netlify] Starter tier for the deployment from the (private) [GitHub] repository.
  All the heavy lifting was done in this brilliant starter project [alxshelepenok/gatsby-starter-lumen][lumen], and I added a few config options and meta detils.

React and GraphQL are still a bit _magic_ but I'm happy with the effort to results ratio!

## What's Next?

I admit, this is really filler content... so coming up next should be a blog mission statement. 

I really want this to become a healthy motivation to share my tech tinkering and improve my writing.
A couple of larger projects, that I've had in mind for years, have never really started to take form due to a lack of structure for my recreational work.
Additionally, I do have a struggle with analysis paralysis and perfectionism when there isn't a deadline.
An infrequent blog post now and again might be just the solution

I'll be posting more in [update][update] category, soon™️.


[website2014]: media/website-2014.png "nathanrosspowell.com in 2014"
[website2017]: media/website-2017.png "nathanrosspowell.com in 2017"
[website2023]: media/website-2023.png "nathanrosspowell.com in 2023"
[baconipsum]: https://baconipsum.com/ "Bacon Ipsum - A Meatier Lorem Ipsum Generator"
[jekyll]: https://jekyllrb.com/ "Jekyll - A static site generator written in Ruby"
[gatsby]: https://www.gatsbyjs.com/ "Gatsby - a React-based open source framework"
[netlify]: https://www.netlify.com/ "Netlify - a development platform that includes build, deploy, and serverless backend services for web"
[update]: ../../category/update/ "Posted tagged with 'update'"
[github]: https://github.com/nathanrosspowell "GitHub.com/nathanrosspowell"

[lumen]: https://github.com/alxshelepenok/gatsby-starter-lumen "alxshelepenok/gatsby-starter-lumen - A constantly evolving and thoughtful architecture for creating static blogs with Gatsby"