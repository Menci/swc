function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
    if (null == type) return "";
    if ("function" == typeof type) {
        var prototype;
        return describeNativeComponentFrame(type, !!((prototype = type.prototype) && prototype.isReactComponent));
    }
    if ("string" == typeof type) return describeBuiltInComponentFrame(type);
    switch(type){
        case exports.Suspense:
            return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
    }
    if ("object" == typeof type) switch(type.$$typeof){
        case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);
        case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
        case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);
        case REACT_LAZY_TYPE:
            var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
            try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
            } catch (x) {}
    }
    return "";
}
