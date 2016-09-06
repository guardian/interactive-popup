Interactive popup 
=================================

An interactive popup implementation for desktop and mobile web that degrades gracefully on embedded webview.
This is intended to be use as a workaorund for embedded external content provider that does not support https. 

Development
=====

Setup
-----
`npm install`

Running locally
-----------
`npm start`

open `http://localhost:8000/embed.html`


Production / deployment
-----------------------

1. Update `cfg/s3.json`
2. `grunt deploy`

NOTE: Ensure you have AWS credentials setup by either adding them to your `~/.bashrc` or
creating a `~/.aws/credentials` file with the following content:

```
[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```


Using third party js
--------------------
1. Install package using JSPM e.g.

	`jspm install reqwest` or

	`jspm install github:guardian/iframe-messenger`

2. Import package. e.g.

	`import reqwest from 'reqwest'` or

	`import reqwest from 'guardian/iframe-messenger'`

Text/JSON in javascript
-----------------------
```
import someHTML from './text/template.html!text'
import someJSON from './data/data.json!json'
```
