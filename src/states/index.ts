import * as helper from "./helper";
import { AWSconfig } from "./awsconfig";
import { ChoiceState } from "./choice";
import { StartAtEdge, NextEdge, RetryEdge, CatchEdge, ChoiceEdge, DefaultEdge } from "./edge";
import { FailState } from "./fail";
import { ParallelState } from "./parallel";
import { PassState } from "./pass";
import { StartPoint, EndPoint } from "./point";
import { SucceedState } from "./succeed";
import { TaskState } from "./task";
import { WaitState} from "./wait";

export function setupStates (editorUi) {
  helper.init(editorUi);
  window['AWSconfig'] = AWSconfig;
  window['ChoiceState'] = ChoiceState;
  window['FailState'] = FailState;
  window['ParallelState'] = ParallelState;
  window['PassState'] = PassState;
  window['StartPoint'] = StartPoint;
  window['EndPoint'] = EndPoint;
  window['SucceedState'] = SucceedState;
  window['TaskState'] = TaskState;
  window['WaitState'] = WaitState;
  window['StartAtEdge'] = StartAtEdge;
  window['NextEdge'] = NextEdge;
  window['RetryEdge'] = RetryEdge;
  window['CatchEdge'] = CatchEdge;
  window['ChoiceEdge'] = ChoiceEdge;
  window['DefaultEdge'] = DefaultEdge;
}
