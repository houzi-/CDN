(function () {
    "use strict";
    // 视频网站有所不同
    const Interceptor = {
        image: {
            anti_createElement() {
                document.createElement = new Proxy(document.createElement, {
                    apply(...args) {
                        const node = Reflect.apply(...args);
                        if (args.length === 3 && args[2][0] === "img")
                            Object.defineProperty(node, "src", { set(v) {} });
                        return node;
                    },
                });
            },
            anti_construct() {
                window.Image = new Proxy(window.Image, {
                    construct(target, args) {
                        let img = new target(...args);
                        if (args.length === 2 && args[1] === 1 && args[0] === 1)
                            Object.defineProperty(img, "src", { set(v) {} });
                        return img;
                    },
                });
            },
            initial() {
                this.anti_construct();
                this.anti_createElement();
            },
        },
        object() {
            const trap = (v) => {
                Object.defineProperties(v.prototype, {
                    fail: {
                        value: () => {
                            throw new Error("fuck tencent");
                        },
                    },
                    action: {
                        value: () => null,
                    },
                    check: {
                        value: () => null,
                    },
                });
            };
            let o = null;
            Object.defineProperty(window, "Beacon", {
                set(a) {
                    o = a;
                    trap(a);
                },
                get() {
                    return o;
                },
            });
        },
        anti_interval() {
            window.setInterval = new Proxy(window.setInterval, {
                apply(...args) {
                    if (args.length === 3) args[2][1] = 10000000;
                    Reflect.apply(...args);
                },
            });
        },
        network: {
            anti_fecth() {
                const fetch = window.fetch;
                window.fetch = (...args) =>
                    (async (args) => {
                        const url = args[0];
                        const ad_list = ["trace", "beacon"];
                        if (ad_list.some((e) => url.includes(e)))
                            throw new SyntaxError("fuck tencent");
                        else return await fetch(...args);
                    })(args);
            },
            anti_xmlHTTP() {
                window.XMLHttpRequest = class extends window.XMLHttpRequest {
                    open(...args) {
                        const url = args[1];
                        const ad_list = ["trace", "beacon"];
                        if (ad_list.some((e) => url.includes(e)))
                            throw new SyntaxError("fuck tencent");
                        else return super.open(...args);
                    }
                };
            },
        },
        start() {
            this.object();
            this.image.initial();
            if (location.hostname === "v.qq.com") this.network.anti_xmlHTTP();
            else {
                this.anti_interval();
                this.network.anti_fecth();
                this.network.anti_xmlHTTP();
            }
        },
    };
    Interceptor.start();
})();
