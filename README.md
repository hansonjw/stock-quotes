# "Stock Quote"  
  No license is applicable for this application

  ## Description:  
  This is a blog style investment research and collaboration platform.
  The primary goals are for users to;
  - generate and post an Investment Thesis on individual stocks
  - collaborate and engage with other users to test the thesis
  - raise the general acumen, interest, and knowlegebase of investing in the community
  
  Users can:
  - Create an account
  - Post an investment thesis on individual stocks
  - Post comments and/or ratings on other posts
  
  This utilizes an external API to bring in data for a particular stock.

  >*Thesis: a statement or theory that is put forward as a premise to be maintained or proved.*

  ## Table of Contents:
  * [Installation Instructions](#Installation:)
  * [How to use This Application:](#How-To:)
  * [How to Contibute:](#Contibute:)
  * [License Information:](#License:)
  * [Questions:](#Questions:)
  
  ## Database Design
  - *investments* table, Primary Key = ticker
  - *thesis* table, Primary Key = thesis_id, Foreign Keys = ticker, user_id
  - *users* table, Primary Key = user_id
  - *comments* table, Primary Key = comment, Foreign Keys = ticker

  <a name="Installation:"></a>
  ## Installation:  
  npm install
  
  <a name="How-To:"></a>
  ## How-To:  
  Create an account.  Enter a ticker symbol to bring up financial data on a stock.  Post an 'investment thesis'.  Read and/or comment on your own, or others investment thesis'.

  <a name="Contribute:"></a>
  ## Contribute:  
  Please contact me if you would like to contribute.

  <a name="License:"></a>
  ## License:  
  This application is covered under the following license...
  No License  
  For more information on the license click on the badge below:
  No license is applicable for this application
  
  <a name="Questions:"></a>
  ## Questions:  
  For questions, comments, suggestions, I can be reached at the following  
  https://github.com/hansonjw  
  hansonjw@gmail.com
