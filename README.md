
ng generate component components/home
ng g c components/about
ng g c components/contact
ng g c components/counter
ng g c components/header
ng g c components/footer

ng g c components/not-found


ng g service services/error-handler


ng g c components/login
ng g service services/auth-interceptor


ng g c components/grid
ng g c components/table
ng g c components/list

ng g directive directives/host-template

--

ng g module shared
ng g c shared/components/address
ng g interface shared/models/address

ng g c shared/components/like

ng g pipe shared/pipes/filter
ng g pipe shared/pipes/power
ng g pipe shared/pipes/sort

ng g directive shared/directives/highlight


ng g service shared/services/auth

ng g guard shared/guards/auth



--
cart module/feature based module

ng g module cart
ng g c cart/components/cart
ng g c cart/components/cart-list
ng g c cart/components/cart-summary
ng g class cart/models/cart-item
ng g service cart/services/cart


ng g c cart/components/checkout



--

product module

ng g module product

ng g c product/components/product-home
ng g c product/components/product-list
ng g c product/components/product-edit
ng g c product/components/product-search

ng g service product/services/product

ng g class  product/models/product
ng g class product/models/brand


ng g guard product/guards/can-edit
ng g guard product/guards/save-alert
ng g interface product/models/editable

ng g service product/resolvers/products





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


DAY-2 Revision

    ngClass, ngIf, ngIf Else, ngFor, ng-content, ngTemplate
    # - template reference variable
        DOM reference
    built in pipes

    dependency injection
    Injectable
    Service
        share the data between components
        having application state
        business logic

    Routing
        RouterModule
            forRoot (routesConfig) .. 
                directives, many services speicifc to routing
            forChild(routesConfig)
                directives,

            path --> component
            ** - wild card, not found
            back/forward/bookmarking

    Two Way Binding
        Property Binding
        Event Binding

        Ex: NgModel, 
            Custom Two Binding
                PropertyName
                PropertyNameChange - event emitter
                

Same Origin
    same protocol
    same domain
    same port
    path can vary

    http://example.com/mypath (default port 80)
    http://example.com/mypath2 (default port 80)
        share 
            localStorage,
            sessionStorage
            API calls
            index db
            cookie [can be limited by path]

Cross Origin
    example

    url: http://example.com [origin url]

    compare with

    https://example.com [Cross Origin, Protocol vary]
    http://www.example.com [Cross Origin, domain difference]
    http://www.example.com:8080 [Cross Origion, port difference]

    http://example.com/path2/products/  [Same Origin]