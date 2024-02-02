# fe-02 : Book Search

This repo has starter files for an application that accepts a book title and/or author, and searches the Open Library API for results. It is split into two phases, the "preparing" phase, and the "displaying" phase.

| Preparing | Displaying |
| --- | --- |
| a   | b   |

## Recommended Steps

#### 0 - Initial Setup

Perform the steps we are getting used to for every repository setup.

<details>
<summary> <i>Hint: Initial Setup</i> </summary>

1. Clone the Repo
2. Open GitBash at the repo root folder.
3. Run `npm install`
4. Run `npm run test:install`
5. Run `npm start`
6. (In a new GitBash window) Run `npm run test:unit` (these will fail, it's fine)
7. (In a new GitBash window) Run `npm run test:e2e` (these will fail, it's fine)
8. Open the project in VS Code
9. Open the browser to http://localhost:5173

</details>

<br/><br/>

#### 1 - HTML Markup

I've provided the HTML markup for this exercise. But still take a look at `index.html` to familiarize yourself with what's there.

<br/><br/>

#### 2 - Search Button (gatherInput)

Hook up the search button so that when you click it, it runs the `gatherInput()` function.

Implement `gatherInput()` so that it creates an object that looks like:

```
const query = {
  title: 'the text from the title-input',
  author: 'the text from the author-input',
  fields: 'title,author_name,cover_i',
}
```

Then, calls `performSearch(query)` - passing it that `query` object.

As an added detail, if the `title-input` was left blank, `query.title` should be omitted from the object. The same goes for `author-input` and `query.author`.

<details>
<summary> <i>Hint: Omitting Object Properties</i> </summary>
Try this code in the console:

```
const test = {
  a: 1,
  b: 2,
}
console.log(test);
delete test.a;
console.log(test);
```

[MDN delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

</details>

<br/><br/>

#### 3 - Search Button (performSearch)

The `performSearch(query)` function should use `Request` and `fetch()` to make a GET request to the Open Library API as documented here : [https://openlibrary.org/dev/docs/api/search](https://openlibrary.org/dev/docs/api/search).

The Request URL should look something like:

`https://openlibrary.org/search.json?title=title&author=author&fields=fields`

<details>
<summary> <i>Hint: Building the Query String</i> </summary>

Try this code in the console:

```
const query = {
  a: 1,
  b: 'two'
}
const params = new URLSearchParams(query)
console.log(params.toString())
```

[MDN URLSearchParams.toString()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/toString)

</details>
<br />

If you need help remembering how to `fetch()` - reference the example code from earlier this week : https://github.com/IGME-330-01-2235/w3m-example-apis

If you've done this step correctly, your unit tests should pass.

Ultimately, this method should call `processData(data)` - passing (as `data`) the information from the API response.

<br/><br/>

#### 4 - Display Results

Your `processData(data: BookResponse)` function should iterate over `data.docs` and generate a `<li>` element for each book. The `<li>` should display within it the title, author, and cover image. (You'll probably use a bunch of [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) to make this work.)

An example cover image URL looks like:
```
`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
```

Also change the `<body>` className to `'displaying'` to get the phase transition going.

<br/><br/>

#### 5 - Reset Button

Hook up the reset button so that it:

1. Clears the `<ul>` element (I like `list.replaceChildren()` for this).
2. Changes the `<body>` className back to `'preparing'`

We don't need to clear the input text this time around. I like the idea of having users hit Reset and being able to tweak their search inputs.

<br/><br/>

#### 6 - Test and Submit

At this point, your e2e tests should be passing. Verify that, commit, and push your changes. :tada:
