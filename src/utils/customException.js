export const customException = (name, level,message) => {
    return  { 
        name:        name, 
        level:       level, 
        message:     message?message:name, 
        htmlMessage: message?message:name,
        toString:    function(){return this.name + ": " + this.message;} 
      }; 
};