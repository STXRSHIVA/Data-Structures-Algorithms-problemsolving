let s = "anagram";
let t = "nagaram";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const mp = {};
    for(let i = 0;i < s.length; i++){
        if(mp[s[i]]){
            // if it is defined, we icrement
            mp[s[i]] += 1;
        }else{
            // if it undefined we define it
            mp[s[i]] = 1;
        }
    }
    for(let i = 0; i< t.length ; i++){
        if(mp[t[i]] === undefined){
            return false
        }else{
            mp[t[i]] -= 1;
            if(mp[t[i]] == 0){
            delete mp[t[i]];
            }
        }    
    }

    

    return Object.keys(mp).length == 0;
};

console.log(isAnagram(s,t));

// Which i used

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function(s, t) {
    var sortAlphabets = function(text) {
    return text.split('').sort().join('');
    };
    const p1 = sortAlphabets(s);
    const p2 = sortAlphabets(t);
    if(p1==p2){
        return true;
    }else{
        return false
    }

};


console.log(isAnagram1(s,t));