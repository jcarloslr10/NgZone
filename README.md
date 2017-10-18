# Optimization-UI-Events-NgZone

Angular (5.0.0-rc.2) samples using NgZone to improve performance when your application works with UI events (async task in general).

You can see several sample applications, a basic one that explains the relationship of NgZone with the Angular change detector which uses a 'noop' Zone to run the application without NgZone, and two other applications using NgZone that work with mouse events simulating drag & drop. The first one is not optimized with NgZone and the second one is.

### Prerequisites

* [NodeJS](https://nodejs.org/es/) - The package manager to install dependencies
* [VSCode](https://code.visualstudio.com/Download) - To view the code of the samples
* [Git](https://git-scm.com/) - To get the code of the samples

### Installing and Running

Install dependencies:

```
npm install
```

Run in development environment:

```
ng serve
```

Run in production environment: N/A yet (TODO)

## Demos
- [Basic (about change detector without NgZone)](https://github.com/jcarloslr10/NgZone/tree/master/demo-basic)
- [Unoptimized UI](https://github.com/jcarloslr10/NgZone/tree/master/demo-unoptimized)
- [Optimized UI](https://github.com/jcarloslr10/NgZone/tree/master/demo-optimized)

## Author

* **Juan Carlos López** - [@jcarloslr10](https://twitter.com/jcarloslr10)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details