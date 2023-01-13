tinymce.PluginManager.add('spoiler', function(editor){
    const openDialog = function(){
        return editor.windowManager.open({
            title: `Insert a Spoiler Element`,
            body: {
                type: `panel`,
                itemes: [
                    {
                        type: `htmlpanel`,
                        html: `<div>Text that will be enclosed in the spoiler tags</div>`,
                    },
                    {
                        type: `textarea`,
                        name: 'body',
                        label: `Spoiler Text`
                    }
                ]
            },
            buttons: [
                {
                    type: `cancel`,
                    text: `Cancel`
                },
                {
                    type: `submit`,
                    text: `OK`,
                    primary: true
                }
            ],
            onsubmit: function (api) {
                var data = api.getData()
                editor.insertContent(`<spoiler>${data.body}</spoiler>`)
                api.close()
            }
        })
    }
    editor.ui.registry.addButton('spoiler',{
        text:`Spoiler`,
        onAction: function(){
            openDialog()
        }
    })
    editor.ui.registry.addMenuItem(`insert`,{
        text: `Spoiler`,
        onAction: function(){
            openDialog()
        }
    })
})