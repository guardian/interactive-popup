Interactive popup 
=================================

An interactive popup implementation for desktop and mobile web that degrades gracefully on embedded webview.
This is intended to be use as a workaorund for embedded external content provider that does not support https.

![](https://cloud.githubusercontent.com/assets/615085/18395663/535dbaf6-76b7-11e6-9449-607ab7f99962.png)


Usage
------

Embed the interactive in Composer with as `src` parameter the `url` **encoded** to open:

`https://interactive.guim.co.uk/2016/09/popup/embed/embed.html?src=http://videoplayback.parliamentlive.tv/Player/Index/3cfdcccc-7e7e-457a-87c7-5ed85d37fd8f`

To encode the url, you can use an [online encoder](http://meyerweb.com/eric/tools/dencoder/).

### Custom images

* Parliament TV


Development
-----------

### Setup

`npm install`

###  Running locally

`npm start`

open `http://localhost:8000/embed.html`


###  Production / deployment


1. Update `cfg/s3.json`
2. `grunt deploy`

NOTE: Ensure you have AWS credentials setup by either adding them to your `~/.bashrc` or
creating a `~/.aws/credentials` file with the following content:

```
[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```


### Using third party js

1. Install package using JSPM e.g.

	`jspm install reqwest` or

	`jspm install github:guardian/iframe-messenger`

2. Import package. e.g.

	`import reqwest from 'reqwest'` or

	`import reqwest from 'guardian/iframe-messenger'`

###  Text/JSON in javascript

```
import someHTML from './text/template.html!text'
import someJSON from './data/data.json!json'
```
