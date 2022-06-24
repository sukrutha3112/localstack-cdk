"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkStack = void 0;
//import { Duration, Stack, StackProps } from 'aws-cdk-lib';
const cdk = require("@aws-cdk/core");
//import { Construct } from 'constructs';
const lambda = require("@aws-cdk/aws-lambda");
class CdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const hello = new lambda.Function(this, 'MyFunction', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hello.handler',
            code: lambda.Code.fromAsset('lib/lambda'),
        });
        /*const queue = new sqs.Queue(this, 'CdkQueue', {
          visibilityTimeout: Duration.seconds(300)
        });
        const topic = new sns.Topic(this, 'CdkTopic');
        topic.addSubscription(new subs.SqsSubscription(queue));*/
    }
}
exports.CdkStack = CdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDREQUE0RDtBQUM1RCxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLDhDQUE4QztBQUU5QyxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDcEQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1NBRTFDLENBQUMsQ0FBQztRQUVIOzs7O2lFQUl5RDtJQUUzRCxDQUFDO0NBQ0Y7QUFsQkQsNEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBEdXJhdGlvbiwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG4vL2ltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuXG5leHBvcnQgY2xhc3MgQ2RrU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaGVsbG8gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdNeUZ1bmN0aW9uJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcicsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xpYi9sYW1iZGEnKSxcbiAgICAgIFxuICAgIH0pO1xuXG4gICAgLypjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ0Nka1F1ZXVlJywge1xuICAgICAgdmlzaWJpbGl0eVRpbWVvdXQ6IER1cmF0aW9uLnNlY29uZHMoMzAwKVxuICAgIH0pO1xuICAgIGNvbnN0IHRvcGljID0gbmV3IHNucy5Ub3BpYyh0aGlzLCAnQ2RrVG9waWMnKTtcbiAgICB0b3BpYy5hZGRTdWJzY3JpcHRpb24obmV3IHN1YnMuU3FzU3Vic2NyaXB0aW9uKHF1ZXVlKSk7Ki9cblxuICB9XG59XG4iXX0=