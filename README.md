# React Boilerplate

>A repo with all the necessary to start a new React project... yes without using `create-react-app` 🤮.

## Dependencies [wip]

- nvm
- yarn

## Development

- `$ yarn add` to install all the dependencies.
- `$ yarn start` to start the API.
- `$ yarn test` to apply test.

## Recomented Git Flow

```css
        * master
        | \
        |  \
        |  new feature
        |  /
        | /
        * {Rebase and merge}
      / |
     /  |
tag x.0 |
  / |   |
hot |   *
fix |   |\
  \ |   | \
   \|   |  \
  x.0.1 |  feature
     \  |   |
      \ |   |
        *   |
        | \ |
        |  \|
        |   * {git pull --rebase origin master}
        |  /
        | /
        *
```

The branch naming convention will be:

- **features :** `feat-{trello_card_#}/{short_description}`
- **fix :** `fix-issue{-TRELLO_# if any}/{short_description}`
- **hot fix:** `hotfix{-TRELLO_# if any}/{short_description}`

> We will take advantage of git tags, so we will add the changes to `master` periodically, and create tags in defined intervals of time/sprints.

## Deployment

>WIP

## FAQs

>WIP
