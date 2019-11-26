const menuTemplate = [
    {
        label: 'File',
        submenu:[
            { id:'menuItemNew', label: 'New' },
            { id:'menuItemOpen', label: 'Open' },
            { type: 'separator' },
            { id:'menuItemSave', label: 'Save' },
            { id:'menuItemSaveAs', label: 'SaveAs' },
            { type: 'separator' },
            { id:'menuItemFileInfo', label: 'File Info' },
            { id:'menuItemClose', label: 'Close' },
            { type: 'separator' },
            { role: 'About' },
            { role: 'quit' }
    ]
    },
    {
        label: 'Instruction',
        submenu:[
            { id:'menuItemInsert', label: 'Insert' },
            { id:'menuItemEdit', label: 'Edit' },
            { id:'menuItemDelete', label: 'Delete' }
        ]
    },
    {
        label: 'Instruction',
        submenu:[
            { id:'menuItemAddFunc', label: 'Add' },
            { id:'menuItemDeleteFunc', label: 'Delete' },
            { type: 'separator' },
            { id:'menuItemFuncInfo', label: 'Function Info' }
        ]
    },
    {
        label: 'Tools',
        submenu:[
            { id:'menuItemConstTable', label: 'Constant Table' }
        ]
    }
]

exports.menuTemplate = menuTemplate