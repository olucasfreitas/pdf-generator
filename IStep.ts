import IPersona from "./IPersona";

export default interface IStep {
  nextStep?: any;
  backStep?: any;
  info?: IPersona;
}
