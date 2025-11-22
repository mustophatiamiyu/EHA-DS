// src/components/Progress/Progress.tsx
import React from 'react';
import { Progress as RSuiteProgress } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

// RSuite Progress exports Line and Circle as static properties of a Progress object, 
// but also exports them individually in some versions. 
// We will wrap them to ensure consistent styling.

export interface ProgressLineProps {
    percent?: number;
    strokeColor?: string;
    strokeWidth?: number;
    trailColor?: string;
    trailWidth?: number;
    showInfo?: boolean;
    status?: 'success' | 'fail' | 'active';
    className?: string;
    style?: React.CSSProperties;
}

export interface ProgressCircleProps {
    percent?: number;
    strokeColor?: string;
    strokeWidth?: number;
    trailColor?: string;
    trailWidth?: number;
    showInfo?: boolean;
    status?: 'success' | 'fail' | 'active';
    gapDegree?: number;
    gapPosition?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    style?: React.CSSProperties;
}

const { Line: RSuiteLine, Circle: RSuiteCircle } = RSuiteProgress as any;

const Line = ({
    percent = 0,
    strokeColor,
    status,
    style,
    className,
    ...props
}: ProgressLineProps) => {

    // Map status to design token colors if no explicit strokeColor is provided
    let finalStrokeColor = strokeColor;
    if (!finalStrokeColor && status) {
        if (status === 'success') finalStrokeColor = designTokens.semanticColors.feedback.success;
        if (status === 'fail') finalStrokeColor = designTokens.semanticColors.feedback.error;
        if (status === 'active') finalStrokeColor = designTokens.semanticColors.interactive.primary;
    }
    if (!finalStrokeColor) {
        finalStrokeColor = designTokens.semanticColors.interactive.primary;
    }

    return (
        <RSuiteLine
            percent={percent}
            strokeColor={finalStrokeColor}
            status={status}
            style={style}
            className={`ds-progress-line ${className || ''}`}
            {...props}
        />
    );
};

const Circle = ({
    percent = 0,
    strokeColor,
    status,
    style,
    className,
    ...props
}: ProgressCircleProps) => {

    // Map status to design token colors
    let finalStrokeColor = strokeColor;
    if (!finalStrokeColor && status) {
        if (status === 'success') finalStrokeColor = designTokens.semanticColors.feedback.success;
        if (status === 'fail') finalStrokeColor = designTokens.semanticColors.feedback.error;
        if (status === 'active') finalStrokeColor = designTokens.semanticColors.interactive.primary;
    }
    if (!finalStrokeColor) {
        finalStrokeColor = designTokens.semanticColors.interactive.primary;
    }

    return (
        <RSuiteCircle
            percent={percent}
            strokeColor={finalStrokeColor}
            status={status}
            style={style}
            className={`ds-progress-circle ${className || ''}`}
            {...props}
        />
    );
};

export const Progress = {
    Line,
    Circle,
};
