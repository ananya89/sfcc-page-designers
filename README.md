# sfcc-page-designers

# Page Designer Meta Definition Files
Each page type and component type requires a JSON meta defintion file. A meta definition file for a page type describes the regions of the page where a merchant can place components. A meta defintion file for a component type describes the attributes that a merchant defines when using the component type and can also define regions within the component type.


1. Put the meta definition file in one of the following directories of the custom cartridge, or any arbitrary subdirectory within these directories:

Page Types: ```{your_cartridge}/cartridge/experience/pages```

Component Types: ```{your_cartridge}/cartridge/experience/components```

2. The meta definition file name can include only alphanumeric or underscore characters.
3. If you put the meta definition file into a subdirectory within the /experience/pages or /experience/components directories, the names of the levels in the subdirectory must also use only alphanumeric or underscore characters.
4. Each page type or component type requires a corresponding script file. The script file must have the same name as the type's meta definition file, but with a .js extension.
5. The script file name can include only alphanumeric or underscore characters. Put the script file at the same location as its corresponding meta definition file.
6. The script file must include a `render` function that returns the markup for the page. You can assemble the markup using any process you want, as long as the result is a string. In many cases, the `render` function calls an ISML template to which it passes information about the page or component type and its content. If you use an ISML template, you must use the dw.util.Template API to render the markup from the template. Don’t use dw.template.ISML because it doesn't return a string, and it writes the markup to the response stream right away.

Page type render ISML: ```{your_cartridge}/cartridge/templates/default/experience/pages```

Component Types render ISML: ```{your_cartridge}/cartridge/templates/default/experience/components```
 
7. Keep the UI related files in below directories

Page Types: ```{your_cartridge/cartridge/client/default/scss/experience```

Component Types: ```{your_cartridge/cartridge/client/default/scss/experience/components```
