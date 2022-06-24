//import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from '@aws-cdk/core';
import { Construct } from 'constructs';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGateway from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset('lib/lambda'),
      
    });

    new apiGateway.LambdaRestApi(this,'MyEndpoint',{
      handler: hello
    });

    /*const queue = new sqs.Queue(this, 'CdkQueue', {
      visibilityTimeout: Duration.seconds(300)
    });
    const topic = new sns.Topic(this, 'CdkTopic');
    topic.addSubscription(new subs.SqsSubscription(queue));*/

  }
}
