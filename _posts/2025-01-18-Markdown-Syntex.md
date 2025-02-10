---
title: "Markdown Guide: Learn Markdown Syntax and Features"
date: 2025-01-18
redirect_from: 
  - /markdown/
permalink: /posts/2025/01/markdown-guide/
tags:
  - markdown
  - markdown guide
  - markdown tutorial
  - markdown syntax
meta_description: "Learn the essentials of Markdown with this comprehensive guide. Explore basic syntax, advanced features like tables, task lists, and footnotes, and start creating readable, well-formatted content with ease."

---

Learn the essentials of Markdown with this comprehensive guide. Explore basic syntax, advanced features like tables, task lists, and footnotes, and start creating readable, well-formatted content with ease

{% include toc %}
# Markdown Guide: Learn Markdown Syntax and Features 

Markdown is a lightweight markup language that makes it easy to format plain text for web publishing. For instance, instead of learning complex HTML tags like `<b>` for bold text or `<a>` for links, you can use simple symbols like `**` for bold or `[text](url)` for links. This simplicity speeds up writing and keeps your content readable, even without rendering.

It's widely used in documentation, blogging, and even coding environments. This guide will help you understand the basics and get started with Markdown.

## Why Use Markdown?

- **Simplicity**: Write content with minimal formatting syntax.
- **Portability**: Works across multiple platforms and tools.
- **Readability**: Even without rendering, Markdown documents are easy to read.

## Basic Syntax

Here are some common Markdown elements:

### Headings

Use `#` symbols to define headings. The number of `#` symbols corresponds to the heading level:

```markdown
# Heading 1
## Heading 2
### Heading 3
```
### Blockquotes

Single line blockquote:
> Quotes are cool.

### Emphasis

Add emphasis using asterisks or underscores:

- *Italic*: `*text*` or `_text_`
- **Bold**: `**text**` or `__text__`
- ***Bold and Italic***: `***text***`
### Details Tag (collapsible sections)

The HTML `<details>` tag works well with Markdown and allows you to include collapsible sections, see [W3Schools](https://www.w3schools.com/tags/tag_details.asp) for more information on how to use the tag.

<details>
  <summary>Collapsed by default</summary>
  This section was collapsed by default!
</details>

The source code:

```HTML
<details>
  <summary>Collapsed by default</summary>
  This section was collapsed by default!
</details>
```

Or, you can leave a section open by default by including the `open` attribute in the tag:

<details open>
  <summary>Open by default</summary>
  This section is open by default thanks to open in the &lt;details open&gt; tag!
</details>


### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>


### Strike Tag
This tag will let you <strike>strikeout text</strike>.

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.


### Lists

#### Unordered List: 
Use `-`, `*`, or `+`:

```markdown
- Item 1
- Item 2
```

#### Unordered Lists (Nested)

* List item one 
    * List item one 
        * List item one
        * List item two
        * List item three
        * List item four
    * List item two
    * List item three
    * List item four
* List item two
* List item three
* List item four

```markdown
* List item one 
    * List item one 
        * List item one
        * List item two
        * List item three
        * List item four
    * List item two
    * List item three
    * List item four
* List item two
* List item three
* List item four
```

#### Ordered List: Use numbers:

```markdown
1. First item
2. Second item
```

#### Ordered List (Nested)

1. List item one 
    1. List item one 
        1. List item one
        2. List item two
        3. List item three
        4. List item four
    2. List item two
    3. List item three
    4. List item four
2. List item two
3. List item three
4. List item four

```markdown
1. List item one 
    1. List item one 
        1. List item one
        2. List item two
        3. List item three
        4. List item four
    2. List item two
    3. List item three
    4. List item four
2. List item two
3. List item three
4. List item four
```

### Links

Create hyperlinks using brackets and parentheses:

```markdown
[OpenAI](https://openai.com)
```

### Images

Embed images with similar syntax as links, but add an exclamation mark `!` at the start. For example:

```markdown
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
```

Rendered, the above code displays:

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

### Code Blocks

- **Inline Code**: Use backticks: `` `code` ``
- **Block Code**: Use triple backticks:
```python
def hello_world():
    print("Hello, world!")
```

## Advanced Features

Markdown also supports advanced features like tables, task lists, and footnotes. For example:

### Table 1

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

```markdown
| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |
```
### Table 2

| Name | Class | Grade | 
|:----------|:---------:|------:| 
| Alice | Math | A | 
| Bob | Science | B | 
| Charlie | History | A | 
| David | Math | C | 
| Eva | Science | B | 


```markdown
| Name | Class | Grade | 
|:----------|:---------:|------:| 
| Alice | Math | A | 
| Bob | Science | B | 
| Charlie | History | A | 
| David | Math | C | 
| Eva | Science | B | 
```

### Task Lists
- [x] Complete Markdown guide
- [ ] Publish the blog post

```markdown
- [x] Complete Markdown guide
- [ ] Publish the blog post
```

### Footnotes

Footnotes can be useful for clarifying points in the text, or citing information.[^1] Markdown support numeric footnotes, as well as text as long as the values are unique.[^note]

```markdown
This is the regular text.[^1] This is more regular text.[^note]

[^1]: This is the footnote itself.
[^note]: This is another footnote.
```

[^1]: Such as this footnote.
[^note]: When using text for footnotes markers, no spaces are permitted in the name.

## Conclusion

Markdown is an essential tool for anyone working in web development, technical writing, or content creation. Its simplicity and versatility make it a favorite among professionals and hobbyists alike. 

Ready to dive in? Start by trying out some basic Markdown syntax today! Here's a quick exercise:

Write a small paragraph about your favorite hobby using Markdown. Include:

1. A heading for the title of your hobby.
2. A short description with some *italic* and **bold** text.
3. A list of reasons why you enjoy it.
4. A link to a resource where others can learn more.

You can also explore tools like [Dillinger](https://dillinger.io/) or [Typora](https://typora.io/) to make the experience even smoother.

[Learn more about Markdown](/_pages/markdown.md) and start creating your own documents today!

### Additional Resources

- [Markdown Guide](https://www.markdownguide.org/) - An extensive resource for learning all things Markdown.
- [CommonMark](https://commonmark.org/) - A widely-used Markdown specification.
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) - Learn about GitHub’s Markdown version and its extensions.
- [W3Schools - HTML Details Tag](https://www.w3schools.com/tags/tag_details.asp) - Learn how to use the `<details>` tag with Markdown.
- [Dillinger](https://dillinger.io/) - A cloud-enabled, mobile-ready, offline-storage, AngularJS-powered, HTML5 Markdown editor.
- [Typora](https://typora.io/) - A minimal Markdown editor that provides a seamless live preview.

***
**Footnotes**

The footnotes in the page will be returned following this line, return to the section on <a href="#footnotes">Markdown Footnotes</a>.