'use strict'

new Vue({
    // target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data for the application
    data: {
        event: { name: '', description: '', date: ''},
        events: []
    },

    // Anything within the ready function will run when the application loads
    mounted: function() {
        this.fetchEvents();
    },

    // Methods we want to use in our application are registered here
    methods: {
        fetchEvents: function() {
            var preEvents = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes...',
                    date: '2015-10-02'
                },
            ];
            //$set is a convenience method provided by Vue that is similar to pushing data onto an array
            preEvents.forEach(event => {
                this.events.push(event)
            })
        },

        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = {name: '', description: '', date: ''};
            }
        },

        deleteEvent: function(index) {
            console.log('what is index ', index);
            if(confirm("Are you sure you want to delete this event?")) {
                this.events.splice(index, 1);
            }
        }
    }
});