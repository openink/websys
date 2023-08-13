type anyObject = Record<string, any>;
interface createOptions{
    rootEl :HTMLElement;
    taskBarEl? :HTMLElement;
}
interface sysProfile{
    rootEl :HTMLElement;
    taskBarEl :HTMLElement/* | null*//*NB:HTMLElement里包含了null！*/;
    removed :boolean;
    registry :{
        id :string;
        rootEl :HTMLDivElement;
        running :boolean;
        apis :{
            onRegister :(id :string, rootEl :HTMLDivElement)=>void;
            //...还有很多这样的API，关于窗口的
            onShutDown :(reason? :string)=>boolean | void;
        }
    }[];
}