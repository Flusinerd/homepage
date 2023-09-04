---
title: "Integrating View Transitions into my Homepage"
publishedAt: 2023-09-04
description: "View Transitions are now stable in Astro. Let's take a look in how to integrate them into my homepage"
slug: "astro-view-transitions"
isPublish: true
---

## What is the View Transitions API?

The View Transitions API is a recently introduced feature within the Chromium browser, designed to facilitate the creation of smooth animated transitions between different DOM states while concurrently updating the DOM content in a single, efficient action.

## Astro 3.0

Astro 3.0 has recently incorporated the View Transitions API into its framework, offering a convenient way to implement view transitions on a per-page basis with minimal code. These view transitions enable the updating of page content without the typical full-page browser refresh, resulting in smooth and seamless animations when transitioning between pages.

Astro introduces a `<ViewTransitions />` routing component that can be included within the `<head>` section of a single page. This component grants control over the transitions that occur when navigating away from that page. It leverages a lightweight client-side router that intercepts navigation events, allowing you to tailor and customize the transition effects between pages according to your preferences and requirements.

## Usage on my Site

Implementing the View Transitions API on my website was a breeze. I simply updated my `Layout.astro` file, and it seamlessly integrated the new API, complete with a smooth fade animation that made the website feel like a Single Page Application (SPA) without actually being one.

```jsx
// Layout.astro
import { ViewTransitions } from "astro:transitions";
---
<html lang="en">
  <SEOTags {...headTags} />
  <head>
    <ViewTransitions />
  </head>
  ...
```

## Connecting elements between pages

One of the standout features is the ability to connect elements between pages using the `transition:name` directive. This directive allowed me to instruct Astro about which elements corresponded between the two transitioning pages. As a result, these elements gracefully floated from their original positions to their new positions during the transition. For instance, the title and description of a post card smoothly moved into place on the post page and then back again, enhancing the overall user experience.

```jsx
// PostCard.astro
...
<p class="text-neutral-100" transition:name={title}>{title}</p>
...
<p class="truncate" transition:name={description}>
  {description}
</p>
...
```

```jsx
// posts/[slug].astro
...
  <h1
    class="text-3xl uppercase font-bold text-white"
    transition:name={post.data.title}
  >
    {post.data.title}
  </h1>
  <p
    class="italic"
    transition:name={post.data.description}
  >
    {post.data.description}
  </p>
...
```
