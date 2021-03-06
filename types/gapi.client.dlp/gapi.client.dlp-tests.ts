/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('dlp', 'v2beta1', () => {
        /** now we can use gapi.client.dlp */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * De-identifies potentially sensitive info from a list of strings.
         * This method has limits on input size and output size.
         */
        await gapi.client.content.deidentify({
        });
        /**
         * Finds potentially sensitive info in a list of strings.
         * This method has limits on input size, processing time, and output size.
         */
        await gapi.client.content.inspect({
        });
        /**
         * Redacts potentially sensitive info from a list of strings.
         * This method has limits on input size, processing time, and output size.
         */
        await gapi.client.content.redact({
        });
        /**
         * Schedules a job to compute risk analysis metrics over content in a Google
         * Cloud Platform repository.
         */
        await gapi.client.dataSource.analyze({
        });
        /** Returns the list of root categories of sensitive information. */
        await gapi.client.rootCategories.list({
            languageCode: "languageCode",
        });
    }
});
