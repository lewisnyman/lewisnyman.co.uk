---
layout: default
title: Drupal 8 frontend SMACSS
---

I spent most of today working on [Drupal 8 frontend issues.](https://www.drupal.org/project/issues/search?text=&projects=Drupal%20core&assigned=&submitted=&project_issue_followers=&status[Open]=Open&&&issue_tags_op=%3D&issue_tags=frontend) Most of the day was spent on [Split system.module.css and system.theme.css files into SMACSS style components](https://www.drupal.org/node/2395853) which is a huge issue that will have a great affect on the frontend of Drupal 8.

The files system.module.css (449 lines) and system.theme.css (604 lines) in Drupal contain most of the shared styling across all the functionality in Drupal. Menus, messages, buttons, tabs, etc, etc.

By splitting them all up into their individual files, themers will have a lot more control over what does or doesn't get loaded, and when it gets loaded. Win!

The main reason I want to do it is maintainability, it's really difficult to pick through these massive files to figure our what is going on or where some styling lives. It also makes it a lot easier to tidy up a file if it's only 20 lines instead of a 600 line monster.

Beyond Drupal 8, this opens up even more opportunities. We can start thinking about markup templates, CSS, and JavaScript as bundled components. It will be exciting to see where this leads.


