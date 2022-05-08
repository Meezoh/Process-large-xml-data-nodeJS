# Task

1. Read given `feed.xml` xml file using stream in Node.js using TypeScript or PHP 7.4+ with type declarations
2. Create new (valid) xml feed file `feed_out.xml` adding information (in a new child node named `is_active`) whether given offer should be active or paused (boolean)
3. Calculate how many offers are `active` and how many are `paused` in the recreated xml file (you don't have to use Node.js for this)

## Additional information
Each offer node has JSON inside `opening_times` child node.
It contains information about opening times for given offer on each week day (1 - Monday, 7 - Sunday).
This means opening times can be different between week days.

In order for the offer to be considered 'active':
- opening time for current week day must be before current hour
- closing time for current week day must be after current hour

## Notes:
- Assume all opening times are in UTC
- Some offers won't be active at all on some days

## Examples

Example XML node in input file:
```
<offer>
        <id><![CDATA[7684]]></id>
        <name><![CDATA[Incredible Frozen Pants]]></name>
        <category><![CDATA[Tasty]]></category>
        <description><![CDATA[Atque delectus consequatur quod tempore et est sapiente et quia odio possimus eius ut et similique vero ipsam velit debitis ipsa optio sequi aliquam eius dolorum aut autem error tenetur et mollitia excepturi nihil facilis tempora ipsum sunt dignissimos natus molestiae veritatis velit eaque impedit quibusdam nesciunt sunt non laborum eos est aliquam porro fuga omnis qui explicabo vero rerum debitis perferendis in ut quis quia eveniet cum et nisi eveniet et unde nesciunt ratione qui asperiores soluta voluptatem possimus et ratione eum et cupiditate asperiores voluptatem quam id corporis natus ut eligendi consequuntur vel sunt fugit temporibus dolor iusto cumque repudiandae illum fugiat dignissimos sapiente esse cumque commodi repellendus vel et officiis animi iusto aliquam officiis qui quos doloremque dicta ab quia debitis ut dolores eaque hic dolorum rerum ut esse odit quo quia dolorem facere non non dolorum qui excepturi voluptatem totam minus reprehenderit ipsa rem et et nihil sunt repellat quo voluptatibus impedit in quod quis et natus cum ea officia sed ratione explicabo id atque aliquid cumque est voluptatibus cupiditate unde natus quia ut voluptatibus et consectetur libero saepe numquam amet eligendi qui vero mollitia est exercitationem quas nihil quas nihil debitis laboriosam totam reiciendis aut.]]></description>
        <price><![CDATA[331.69 EUR]]></price>
        <url><![CDATA[https://example.com/product/7684]]></url>
        <image_url><![CDATA[http://lorempixel.com/640/480]]></image_url>
        <opening_times><![CDATA[{"1":[{"opening":"10:00","closing":"21:00"}],"2":[{"opening":"10:00","closing":"21:00"},{"opening":"10:00","closing":"21:00"}],"3":[{"opening":"10:00","closing":"21:00"}],"4":[{"opening":"10:00","closing":"21:00"}],"5":[{"opening":"10:00","closing":"21:00"}],"6":[{"opening":"10:00","closing":"21:00"}],"7":[{"opening":"11:00","closing":"20:00"}],"timezone":"Europe/Warsaw"}]]></opening_times>
</offer>
```

Example XML node in output file:
```
<offer>
        <id><![CDATA[7684]]></id>
        <name><![CDATA[Incredible Frozen Pants]]></name>
        <category><![CDATA[Tasty]]></category>
        <description><![CDATA[Atque delectus consequatur quod tempore et est sapiente et quia odio possimus eius ut et similique vero ipsam velit debitis ipsa optio sequi aliquam eius dolorum aut autem error tenetur et mollitia excepturi nihil facilis tempora ipsum sunt dignissimos natus molestiae veritatis velit eaque impedit quibusdam nesciunt sunt non laborum eos est aliquam porro fuga omnis qui explicabo vero rerum debitis perferendis in ut quis quia eveniet cum et nisi eveniet et unde nesciunt ratione qui asperiores soluta voluptatem possimus et ratione eum et cupiditate asperiores voluptatem quam id corporis natus ut eligendi consequuntur vel sunt fugit temporibus dolor iusto cumque repudiandae illum fugiat dignissimos sapiente esse cumque commodi repellendus vel et officiis animi iusto aliquam officiis qui quos doloremque dicta ab quia debitis ut dolores eaque hic dolorum rerum ut esse odit quo quia dolorem facere non non dolorum qui excepturi voluptatem totam minus reprehenderit ipsa rem et et nihil sunt repellat quo voluptatibus impedit in quod quis et natus cum ea officia sed ratione explicabo id atque aliquid cumque est voluptatibus cupiditate unde natus quia ut voluptatibus et consectetur libero saepe numquam amet eligendi qui vero mollitia est exercitationem quas nihil quas nihil debitis laboriosam totam reiciendis aut.]]></description>
        <price><![CDATA[331.69 EUR]]></price>
        <url><![CDATA[https://example.com/product/7684]]></url>
        <image_url><![CDATA[http://lorempixel.com/640/480]]></image_url>
        <opening_times><![CDATA[{"1":[{"opening":"10:00","closing":"21:00"}],"2":[{"opening":"10:00","closing":"21:00"},{"opening":"10:00","closing":"21:00"}],"3":[{"opening":"10:00","closing":"21:00"}],"4":[{"opening":"10:00","closing":"21:00"}],"5":[{"opening":"10:00","closing":"21:00"}],"6":[{"opening":"10:00","closing":"21:00"}],"7":[{"opening":"11:00","closing":"20:00"}],"timezone":"Europe/Warsaw"}]]></opening_times>
        <is_active><![CDATA[true]]></is_active>
</offer>
```
