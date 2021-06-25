interface ProperStatic {
    readonly fn: ProperBase;
    (window: Window, discriminator: boolean): ProperStatic;
}
