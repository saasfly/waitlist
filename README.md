# Your Next-Gen AI Waitlist

Kickstart your AI startup journey with a waitlist instead of a SaaS template. Of course, once you've completed your waitlist, check out our AI-powered Next.js SaaS template [Saasfly](https://github.com/saasfly/saasfly).

> **Nextify** offers complete enterprise-grade SaaS solutions. If you're interested in discussing your project or just want to connect with us, feel free to reach out at contact@nextify.ltd.

> ❤️ We **provide free technical support and deployment services for non-profit organizations**.

> 🙌 **All profits we gain from open-source projects will be entirely used to support open-source initiatives and charitable causes**.

## Introduction

We aim to build a static waitlist page leveraging Next.js's SSG capabilities and use Google Form to receive form email information.

## ⚡ Live Demo

Try it out for yourself!

Demo URL: https://waitlist.saasfly.io
(⚠️：We forcefully require Google Forms to log in before submission for security reasons. You can turn it off in the test environment.)

## 🚀 Quick Start

### 📋 Prerequisites

Before getting started, make sure you have the following installed:

1. Bun & Node.js & Git

- Linux

```

curl -sL https://gist.github.com/tianzx/874662fb204d32390bc2f2e9e4d2df0a/raw -o ~/downloaded_script.sh && chmod +x ~/downloaded_script.sh && source ~/downloaded_script.sh

```

- MacOS

```

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git

brew install oven-sh/bun/bun

brew install nvm

```

### Installation

To start using this template, follow these steps:

Clone the repository manually:

```

git clone https://github.com/saasfly/waitlist.git

cd waitlist

bun install

```

Set up your project by following these steps:

1. Set up environment variables:

```

cp .env.example .env.local

```
see our document to know how to get your own variables
https://document.saasfly.io/usage/waitlist/google-forms/

2. Run the development server:

```

bun run dev

```

3. Open http://localhost:3000 in your browser to see the result.

## ⭐ Features

### 🐭 Framework

- **Next.js** - The React Framework for the Web (using **App Directory**)

### 🐮 Platform

- **Cloudflare**

### 🐯 Backend

- **Google Forms API** - Form backend

### Deploy
You need to create a Cloudflare pages application.
1、![deploy1.png](deploy1.png)
2、![deploy2.png](deploy2.png)

## 📜 License

This project is licensed under the MIT License. For more information, see the LICENSE file.