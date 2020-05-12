# Vue WordPress Integration Starter

## A simple to use Vue.js app in the form of a WordPress plugin

Sometimes we need a modern, flexibile, and extensible solution to frontend problems in a WordPress project. Some things that need to be handled are too complex or require more reactivity and organization than vanilla JS or jQuery could reasonably accommodate.

Also, Vue is awesome, and who wouldn't want to use it every chance they get?

## Setup

1. `cd app && npm i` to get things started.
2. Once the dependencies are installed develop your app and run `npm run build`. The script will automatically paste the dist folder and its contents into the WordPress plugin folder.
3. Take the contents of `/plugin` and upload it to your WordPress project's `/wp-content/plugins` folder.
4. Log into WordPress and activate the plugin.
5. Add the shortchode defined in the plugin file (It's `[vue_wp]` by default) to any WordPress page, post, or template.
6. Sit back and contemplate how great life is now.
