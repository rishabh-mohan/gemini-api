# gemini.api

Allows you to use an enterprise account as if it were an API of it's own

## The Problem

Purdue's Gemini Enterprise accounts block all of Google's API Studio for student-tier accounts to view.
I wanted to use Argon for my personal projects without dealing with the website UI.

## How It Works

The program allows you to run a JavaScript program with arguments, sending a prompt and desired model, and receiving a valid and complete response.

![System diagram](docs/diagram.png)

## Tech Stack

- **Language:** JavaScript
- **Libraries:** Cheerio, Playwright
- **External tools:** Chromium

## Setup

Step-by-step: how does someone who just cloned your repo get it
running?

```bash
git clone https://github.com/rishabh-mohan/gemini-api
cd gemini-api
./install.sh   # or whatever FIGURE THIS OUT
```

## Usage

How to actually run the thing, with examples.

```bash
node gemini-api.js {prompt} {model}
```

## Roadmap

Features you haven't built yet but plan to (pull these from your
"Schedule" quadrant in the Eisenhower Matrix).

 Get browser to open to vertexai gemini chat
* Accept user prompt and store for later
* Detect login page vs gemini page, prevent pasting
* paste text into new chat button
* detect response
* scrape text from response 
-- not in MVP
* select model for prompting
* attach files
* scrape file responses
* make browser headless

## Author
Rishabh Mohan, github.com/rishabh-mohan/
