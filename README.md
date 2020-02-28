
ng generate component components/home
ng g c components/about
ng g c components/contact
ng g c components/counter
ng g c components/header
ng g c components/footer

--

ng g module shared
ng g c shared/components/address
ng g interface shared/models/address

ng g c shared/components/like


--
cart module/feature based module

ng g module cart
ng g c cart/components/cart
ng g c cart/components/cart-list
ng g c cart/components/cart-summary
ng g class cart/models/cart-item
ng g service cart/services/cart








{{ }} - string interpolation
 property binding
    [name] = "expr"
    name="fixedvalue"

(eventName) = "expr"

-- minimal requirements for angular app

    -- es6+
    -- typescript
    -- node? 
        build
    -- bundle [webpack, runtime.js]
            main.js
                    applicaiton code
                        main.js, app, module...
                        component specific css
                        component html
            vendor.js - node_modules
            polyfill - old browser compatiblity
            styles - global styles, angular.json
            scripts - global js files, part of anuglar.json
            runtime.js - webpack loader


Component
    @Component - decorator
    class -- TS code, interactions
    templateUrl - view
    styleUrls - scopped styles
    selector - custom html tag
                x-, app-, fin-

AppModule
     
    declations - collection of components, directives, pipes,
    imports - other module dependencies
    providers - services
    bootstrap - main component

    AppMoudule is app specific, not to be reused

SharedModule

    exports - expose the components/pipes/directives to other 
        <app-address>
        <p appHighlight>
        {{ 2 | power: 3}}
    modules as public


@Input
title: string

@Input
address: Address

    -- parent to child
    -- property binding
    -- [] - expre
    -- name - static value

Property Binding
    Component to View

Event Binding
    View to Component

@Output
    -- child to parent communication
    -- event binding ()
    -- parent subscribe to event
    -- child publish/trigger/emit the event with value
    -- parent receive value by using $event


// for polyfills

npm i core-js 


SERVICE
    -- JavaScript class
    -- Business Logic 
    -- Hold Application Data State
    -- Share data amoung component /siblings
    -- Singleton (shared) or (instance/per component, no sharing)