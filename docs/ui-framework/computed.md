### vue 计算属性 computed 原理

. 初始化 data 和 computed，分别代理其 set 和 get 方法，对 data 中的所有属性生成唯一的 dep 实例

. 对 computed 中的 属性生成唯一的 watcher，并保存在 vm.\_computedWatchers 中

. 访问计算属性时，设置 Dep.target 指向 计算属性的 watcher，调用该属性具体方法

. 方法中访问 data 的属性，即会调用 data 属性的 get 方法，将 data 属性的 dep 加入到 计算属性的 watcher ， 同时该 dep 中的 subs 添加这个 watcher

. 设置 data 的这个属性时，调用该属性代理的 set 方法，触发 dep 的 notify 方法

. 因为时 computed 属性，只是将 watcher 中的 dirty 设置为 true

. 最后，访问计算属性的 get 方法时，得知该属性的 watcher.dirty 为 true，则调用 watcher.evaluate() 方法获取新的值
