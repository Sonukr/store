(function (j, l, w) {
    
    // define variables and messages
    const isJsonParserAvailable = (l in w && w[l] !== undefined);
    const isLocalStorageAvailable = (j in w && w[j] !== undefined);
    const messages = {
        json: 'JSON is not available.',
        ls: 'localStorage is not available',
        df: 'Your data can\'t saved because localStorage is full'
    }

    // check if json parser is available ? if not, throw error
    if (!isJsonParserAvailable) {
        throw new Error(messages.json);
    }

    // check if localstorage is available ? if not, throw error
    if (!isLocalStorageAvailable) {
        throw new Error(messages.ls);
    }
    
    // create a store function and their prototypes for get, set, remove, clear, length and all.
    w.store = {
        
        // set object literal (set prototype method of store)
        set: function (key, value) {
            try {
                w[l].setItem(key, w[j].stringify(value))
            } catch (e) {
                console.warn(messages.df)
            }
        },

        // get object literal (get prototype method of store)
        get: function(key, value){
            return w[j].parse(w[l].getItem(key))
        },

        // remove object literal (remove prototype method of store)
        remove: function(key){
            w[l].remove(key)
        },

        // clear object literal (clear prototype method of store)
        clear: function(){
            w[l].clear();
        },

        // all object literal (all prototype method of store) which will be calling using get.
        get all(){
            return w[l]
        },

        // clear object literal (clear prototype method of store) which will be calling using get.
        get length(){
            return w[l].length;
        }
    }

})('JSON', 'localStorage', window);