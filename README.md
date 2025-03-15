# CoreCourseProject - BookSummarizer

This project is done as part of our curriculum. It utilizes AWS services to summarize a book (PDF) and provides the summary in the format of an MP3 file.

## Overview

The *BookSummarizer* application allows users to upload a PDF, extract its text, summarize it, and then generate an MP3 audio summary. The workflow involves various AWS services like Textract for text extraction, Bedrock for summarization, and Polly for converting text to speech.

## Architecture
![image](https://github.com/user-attachments/assets/766c11ac-1567-41d8-be6a-da6f34e87da6)
- *React Frontend*: The frontend is built using React and is hosted on AWS Amplify.
- *API Gateway*: The frontend communicates with an API Gateway that handles the interaction with backend services.
- *Lambda Function*: The Lambda function is triggered by the API Gateway. It manages the core backend processes.
- *S3 Input Bucket*: The uploaded PDF is stored in the S3 Input Bucket.
- *Textract*: AWS Textract extracts the text from the uploaded PDF.
- *Amazon Bedrock*: The extracted text is summarized using Amazon Bedrock.
- *Amazon Polly*: The summarized text is converted into speech using Amazon Polly.
- *S3 Output Bucket*: The final MP3 file is stored in the S3 Output Bucket and served back to the frontend.

## Technologies Used

- *Frontend*: React.js (hosted on AWS Amplify)
- *Backend*: 
  - AWS Lambda
  - API Gateway
  - Amazon S3 (Input and Output Buckets)
  - AWS Textract
  - Amazon Bedrock
  - Amazon Polly
- *Hosting*: AWS Amplify (for frontend), AWS Lambda (for backend)

## Features

- *PDF Upload*: Upload a PDF file to the application.
- *Text Extraction*: Extracts text from the uploaded PDF using AWS Textract.
- *Text Summarization*: Summarizes the extracted text using Amazon Bedrock.
- *Audio Conversion*: Converts the summarized text into speech using Amazon Polly.
- *MP3 Download*: Allows the user to download the generated MP3 summary.

## Workflow

1. *User uploads PDF*: The user uploads a PDF via the React frontend.
2. *API Gateway*: The frontend sends the file to the API Gateway.
3. *Lambda Processing*:
   - The Lambda function is triggered by the API Gateway.
   - The PDF file is uploaded to the S3 Input Bucket.
4. *Text Extraction*: AWS Textract extracts the text from the uploaded PDF.
5. *Text Summarization*: The extracted text is passed to Amazon Bedrock for summarization.
6. *Audio Generation*: Amazon Polly converts the summarized text into speech.
7. *Storage in S3 Output Bucket*: The generated MP3 file is stored in the S3 Output Bucket.
8. *Download/Playback*: The final MP3 is made available for playback and download on the frontend.

## Prerequisites

To run this project locally, you'll need the following:

- *Node.js*: Install Node.js from [here](https://nodejs.org/)
- *AWS Account*: Set up an AWS account if you don't already have one.
- *AWS SDK*: Make sure to install the AWS SDK and configure your credentials.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BookSummarizer.git
   cd BookSummarizer
