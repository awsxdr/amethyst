import { PropsWithChildren, useRef } from "react";
import { InputControls } from "@/types";
import { useI18n, useShortcut } from "@/hooks";
import { TooltipButton, TooltipButtonProps } from "./TooltipButton";

export type ShortcutButtonProps<TGroupKey extends keyof InputControls, TControlKey extends keyof InputControls[TGroupKey]> = {
    shortcutGroup: TGroupKey;
    shortcutKey: TControlKey | string;
} & Omit<TooltipButtonProps, 'ref'>;

export const ShortcutButton = <TGroupKey extends keyof InputControls, TControlKey extends keyof InputControls[TGroupKey]>({ 
        children, 
        shortcutGroup,
        shortcutKey,
        disabled,
        description,
        ...props 
    }: PropsWithChildren<ShortcutButtonProps<TGroupKey, TControlKey>>
) => {

    const buttonRef = useRef<HTMLButtonElement>(null);

    const { translate } = useI18n();

    const handleShortcut = () => {
        if(disabled) {
            return;
        }

        buttonRef.current?.click();
    }
    
    const shortcut = useShortcut(shortcutGroup, shortcutKey, handleShortcut);

    return (
        <TooltipButton 
            {...props}
            ref={buttonRef}
            description={
                <>
                    { shortcut?.binding && (
                        <div className="text-base pb-2">
                            <span className="font-bold">{translate("ShortcutButton.Shortcut")}: </span>
                            { shortcut.binding }
                        </div>
                    )}
                    <div>
                        {description}
                    </div>
                </>
            }
            disabled={disabled}
        >
            {children}
        </TooltipButton>
    );
}
