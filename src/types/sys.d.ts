//interface sysProfile{
//    rootEl :HTMLElement;
//    taskBarEl :HTMLElement/* | null*//*NB:HTMLElement里包含了null！*/;
//    removed :boolean;
//    registry :{
//        id :string;
//        rootEl :HTMLDivElement;
//        running :boolean;
//        apis :{
//            onRegister :(id :string, rootEl :HTMLDivElement)=>void;
//            //...还有很多这样的API，关于窗口的
//            onShutDown :(reason? :string)=>boolean | void;
//        }
//    }[];
//}
interface sysProfile{
    settings :sysSettings;
    state :sysState;
}
interface sysSettings{
    rootEl :HTMLElement;
    taskBarEl :HTMLElement;
}
interface sysState{
    turnedOff :boolean;
}
interface sysAPIs{
    get id() :string;
    turnOff :(reason? :string)=>void;
    saveState :()=>stateSavedList;
    restart :()=>void;
}
interface stateSavedList{
    sysSaved :boolean;
    savedApps :[{
        id :string;
        info? :any;
    }];
}