Ext.Loader.setConfig({enabled: true});

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'ux.grid.HeaderToolTip'
]);

Ext.onReady(function() {
    
    var myData = [
        ['3m Co'],
        ['Alcoa Inc'],
        ['Altria Group Inc'],
        ['American Express Company'],
        ['American International Group, Inc.'],
        ['AT&T Inc.'],
        ['Boeing Co.'],
        ['Caterpillar Inc.'],
        ['Citigroup, Inc.'],
        ['E.I. du Pont de Nemours and Company'],
        ['Exxon Mobil Corp'],
        ['General Electric Company']
    ];

    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'}
        ],
        data: myData
    });
    
    Ext.create('Ext.grid.Panel', {
        store: store,
        plugins: ['headertooltip'],
        columns: [
            {
                text     : 'Company',
                flex     : 1,
                sortable : false,
                dataIndex: 'company',
                tooltip: 'Some tooltip'
            }
        ],
        height: 200,
        width: 200,
        title: 'Grid with Header Tooltip',
        renderTo: 'grid-example',
        viewConfig: {
            stripeRows: true
        }
    });
});