# react-header-element

Add condtional header logic to your App to seamlessly switch between 'Functional' header tags and decorative header classes to align your site to WCAG guidelines for misused headers.

## Why was this package created?

Accissibility for websites is now more desired than ever with growing online usage. As such making user experiences for those who use assisted technologys much better is the main reason for thos package. Header tags are misused by many websites and to confirm to WCAG guidence, some misused headers get used for decorative purposes. This package allows for you to switch between tags and div classes to achieve the correct usage.

For more information see [WCAG 2.1 AA - Headings and Labels](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=246#headings-and-labels).

## What does it solve?

Simply put, it allows you to switch between a header element and a header class. Manually or via api fed from a CMS.

## Props

| Name           | Type      | Description                                                                       |
| -------------- | --------- | --------------------------------------------------------------------------------- |
| `isFunctional` | `Boolean` | **Required.** Is the element a header or a div class.                             |
| `value`        | `String`  | **Required.** What header is it? h1 - h6.                                         |
| `fallBack`     | `String`  | **Required.** The header you wish to fall back on should no value exist (h1 - h6) |
| `title`        | `String`  | **Required.** The title of your header.                                           |
| `className`    | `String`  | Add additional classes for styling.                                               |
| `id`           | `String`  | Add an ID for behaviours such as anchors.                                         |
| `style`        | `String`  | Use inline styling should you need to dynamically add CSS.                        |
