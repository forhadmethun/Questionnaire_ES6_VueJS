const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
team.teamSummary();
/***
 i) Will the above code block return an error?
 = The code is fine and it won't return an error. Firstly the method teamSummary() return a modified version of the array of property 'members'
 In the method the property is is mapped to a string and we'll get an array of that modified string and the list will be returned by the method teamSummary().

 ii) If yes, then why and how do we fix it?
 = The method seems fine
 */