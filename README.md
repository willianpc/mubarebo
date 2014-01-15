# Mubarebo

A generic project with **Mu**stache, **Ba**ckbone, **Re**quireJS and **Bo**otstrap

## What is this
It is kind of a "blank project's idea stolen from Struts Blank" with all dependencies needed for a web project.
In my particular case, this is a set that I have been done over and over for each project, so I decided to make some kind of all-in-one-grunt-bower-project with all stuff already set and ready to code.

I know, there are probably some (thousands of) tools around to make this task easier. But this seems more interesting for me, at least, at the moment.

##How can Mubarebo help you
As the very creative name says: **MU**stache, **BA**ckbone, **RE**quire and **BO**otstrap.
All of them already set and ready to get things started.

If you think this repo can help you somehow... well, here is how I see this happening: Let's say you are used to a set of tools **just like** this one. Jackpot! You can clone this and start coding right now.

Now, let's suppose you like this stack, but you like Handlebars instead of Mustache. Oh well, why not clone this and make the single change you want.

But, if you like this stack and you are not happy with the either Grunt or Bower configuration files (unless a couple of changes can make you satisfied), then maybe this repo cannot be useful for you :(

Anyway, I do hope that it can be cool for other people to use it, maybe fork it and make their own changes. Also, there must be something similar (and probably better) to this around the Github :D

##Getting started

Alright, if you've gone this far it might be fun idea to try and use it.
The steps **should be** pretty straightforward:

1. Clone the repository (duh)
2. Install NodeJS dependencies
3. Install Bower dependencies
4. Copy Bower libraries to the ./lib directory
5. Run a simple webserver and/or any other Grunt tasks you like
6. Start coding

If you are not familiar to the Grunt x Bower x Node gang, note that most of these steps will be executed only once.

##The copy/paste tutorial

Here's everything you will need to get the project ready to start coding.


```shell
git clone https://github.com/chambs/mubarebo.git
cd mubarebo
npm install
#If you haven't installed Grunt yet
npm install grunt -g
#If you haven't installed Bower yet
npm install bower -g
bower install
grunt preview
```

After these steps, the only ones you will have to run again are these:

```shell
cd mubarebo
grunt preview
```

Eventually, you will have to run `grunt bower` in order do copy any new libs you have installed with Bower, and, of course, you will have to import these libs into your HTML/JS files.
