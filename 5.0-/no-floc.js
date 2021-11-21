(function() {
    if ( Document instanceof Object === false ) { return; }
    if ( Document.prototype.interestCohort instanceof Function === false ) {
        return;
    }
    Document.prototype.interestCohort = new Proxy(
        Document.prototype.interestCohort,
        {
            apply: function() {
                return Promise.reject();
            }
        }
    );
})();