tinymce.PluginManager.add('spoiler', function(editor, url){
    tinymce.DOM.loadCSS(url +'/css/style.css')
    var openDialog = function(){
        return editor.windowManager.open({
            title: `Insert a Spoiler Element`,
            body: {
                type: `panel`,
                items: [
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
            onSubmit: function (api) {
                var data = api.getData()
                editor.insertContent(`<spoiler class="spoiler">${data.body}</spoiler>`)
                api.close()
            }
        })
    }
    
    editor.ui.registry.addButton('spoiler',{
        text:`Spoiler`,
        icon: 'warning',
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