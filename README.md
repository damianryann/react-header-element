# React Header Element

Add condtional header logic to your App to seamlessly switch between 'Functional' header elements `html <h1>` and decorative header classes `html <div class="h1">` to assist in aligning your site to WCAG guidelines for misused headers.

## Why was this package created?

Accissibility for websites is now more desired than ever with growing online usage. As such, making user experiences for those who use assisted technologies better is the main reason for this package.

For more information see [WCAG 2.1 AA - Headings and Labels](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=246#headings-and-labels).

## What does it solve?

Simply put, it allows you to switch between a header element and a header class by specifying the criteria or via api fed from a CMS. It keeps it tidy and reduces unnecessary extra lines of code.

## Basic Usage

```js
import React from "react";
import HeaderElement from "react-header-element";

const ComponentName = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <HeaderElement
            isFunctional={true}
            title="Hello World"
            value="h1"
            fallBack="h2"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
```

## Installation

```bash
npm install react-header-element --save
```

## Available Props

| Name           | Type      | Description                                                                       |
| -------------- | --------- | --------------------------------------------------------------------------------- |
| `isFunctional` | `Boolean` | **Required.** Is the element a header or a div class.                             |
| `value`        | `String`  | **Required.** What header is it? h1 - h6 / p.                                     |
| `fallBack`     | `String`  | **Required.** The header you wish to fall back on should no value exist (h1 - h6) |
| `title`        | `String`  | **Required.** The title of your header.                                           |
| `className`    | `String`  | Add additional classes for styling.                                               |
| `id`           | `String`  | Add an ID for behaviours such as anchors.                                         |
| `style`        | `String`  | Use inline styling should you need to dynamically add CSS.                        |
