## Project Prompt 
Write a small web application in one of the above languages (Python/Ruby/Javascript). The application only needs to do the following:
Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
Return a JSON object with the key “return_string” and a string containing every third letter from the original string

(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.


### Built With

* JavaScript
* [Express](https://expressjs.com/)
* [Body-Parser](https://www.npmjs.com/package/body-parser)


## Getting Started


### Prerequisites
Make sure you have Node installed - [Follow this Guide](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

### Installation

*Be sure to not include ```$``` at the start of each command

1.Make a new Directory - via the command line in Terminal enter:
 ```sh
   $ mkdir newfolder && ch /path/to/newfolder 
   ``` 

2. Clone the repo
   ```sh
   $ git clone https://github.com/dmccoy1/crypto-parser.git
   ```
3. Inside the cloned repo directory - Install NPM packages
   ```sh
   $ npm install
   ```
4. Run App
   ```sh
   $ node app.js
   ```
    The app will console out:
     ``` sh 
    Listening on port 80
    ```
5. Open a new Terminal Window while the app the is running. Enter:

 ```sh
   $ curl -X POST http://127.0.0.1:80/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'

   ```
Output should be:
  ```
  {"return_string": "muydv"}
  ```


  

